import express from 'express';
import { register, login } from '../Controllers/authController.js'; // Убрана лишняя точка

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;