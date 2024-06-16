import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate('user', 'name photo');
    res.status(200).json({ success: true, message: "Успешно", data: reviews });
  } catch (error) {
    res.status(404).json({ success: false, message: "Не найдено" });
  }
};

export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.params.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({ success: true, message: "Проверка сообщения отправлена", data: savedReview });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};