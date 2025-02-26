import express from 'express';
import { register, login, getUsers } from '../controllers/userController';
import { authenticateToken } from '../utils/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authenticateToken, getUsers);

export default router;