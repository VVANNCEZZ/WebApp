import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Данные успешно обновлены", data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Ошибка в обновлении данных" });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Данные успешно удалены" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Ошибка при удалении данных" });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({ success: false, message: "Пользователь не найден" });
        }

        res.status(200).json({ success: true, message: "Пользователь идентифицирован", data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Не удалось получить информацию о пользователе" });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({ success: true, message: "Пользователи идентифицированы", data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Не удалось получить информацию о пользователях" });
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "Пользователь не найден" });
        }

        const { password, ...rest } = user._doc;

        res.status(200).json({ success: true, message: "Информация о профиле получена", data: { ...rest } });
    } catch (error) {
        res.status(500).json({ success: false, message: "Не удалось получить информацию о профиле" });
    }
};

export const getMyAppointments = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.userId });

        const doctorIds = bookings.map(el => el.doctor.id);
        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");

        res.status(200).json({ success: true, message: "Данные получены", data: doctors });
    } catch (error) {
        res.status(500).json({ success: false, message: "Не удалось получить информацию о записях" });
    }
};