import express from 'express';
const router = express.Router();
import { loginUser, registerUser } from '../Controllers/userController.js';

router.post('/register/user', registerUser);

router.post('/login', loginUser);

export default router;