import express from 'express';
const router = express.Router();
import { registerUser } from '../Controllers/userController.js';

router.post('/register/user', registerUser);

export default router;