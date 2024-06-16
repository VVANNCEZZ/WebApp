import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = user => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "100d", // исправлено: использование правильного формата для expiresIn
        }
    );
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;
    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ success: false, message: 'Пользователь уже существует' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); // исправлено: правильное название переменной

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashedPassword, // исправлено: использование правильного хэшированного пароля
                photo,
                gender,
                role,
            });
        }

        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashedPassword, // исправлено: использование правильного хэшированного пароля
                photo,
                gender,
                role,
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'Пользователь успешно создан' });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Возникла ошибка при создании пользователя, повторите позже' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }

        if (doctor) {
            user = doctor;
        }

        if (!user) {
            return res.status(404).json({ success: false, message: "Пользователь не найден" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: "Данные указаны неверно" }); // исправлено: изменено сообщение об ошибке
        }

        const token = generateToken(user);

        const { password: userPassword, role, appointments, ...rest } = user._doc; // исправлено: исключение пароля из данных пользователя

        res.status(200).json({ success: true, message: "Вход успешно выполнен", token, data: { ...rest }, role });

    } catch (error) {
        res.status(500).json({ success: false, message: "Ошибка входа" });
    }
};