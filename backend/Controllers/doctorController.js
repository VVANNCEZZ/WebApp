import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req,res) => {
    const id = req.params.id 

    try {
        
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true});

        res.status(200).json({success:true, message:"Данные успешно обновлены", data:updatedDoctor});


    } catch (error) {
        
        res.status(500).json({success:false, message:"Ошибка в обновление данных"});

    }
};

export const deleteDoctor = async(req,res) => {
    const id = req.params.id 

    try {
        
        await Doctor.findByIdAndDelete(id);

        res.status(200).json({success:true, message:"Данные успешно удалены", });


    } catch (error) {
        
        res.status(500).json({success:false, message:"Ошибка в удаление данных"});

    }
};

export const getSingleDoctor = async(req,res) => {
    const id = req.params.id 

    try {
        
        const doctor = await Doctor.findById(id).populate('reviews').select("-password");

        res.status(200).json({success:true, message:"Доктор идентифицирован", data: doctor, });


    } catch (error) {
        
        res.status(404).json({success:false, message:"Не один доктор не найден"});

    }
};

export const getAllDoctor = async(req,res) => {
    const id = req.params.id 

    try {

        const {query} = req.query
        let doctors;

        if(query){
            doctors = await Doctor.find({isApproved:"approved", $or:[
            {name:{$regex:query, $options:"i"}},
            {specialization:{$regex:query, $options:"i"}},
         ],
        }).select('-password');
        } else {

         doctors = await Doctor.find({isApproved:"approved"}).select("-password");

        }
        

        res.status(200).json({success:true, message:"Докторы идентифицированы", data:doctors});


    } catch (error) {
        
        res.status(404).json({success:false, message:"Не один доктор не найден"});

    }
};

export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId

    try {
      const doctor = await Doctor.findById(doctorId)  


      if(!doctor) {
        return res.status(404).json({success:false, message:'Доктор не найден'})
      }

      const {password, ...rest} = doctor._doc;
      const appointments = await Booking.find({doctor:doctorId})

      res.status(200).json({success:true, message:'Информация о профиле получена', data:{...rest, appointments}});

    } catch (error) {
        res.status(500).json({success:false, message:'Что-то пошло не так, не удалось получить информацию о профиле'});
    }
};