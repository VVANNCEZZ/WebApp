import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Маршрут для отправки данных контактной формы
router.post('/', async (req, res) => {
  const { email, subject, message } = req.body;

  const newContact = new Contact({
    email,
    subject,
    message,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message' });
  }
});

export default router;