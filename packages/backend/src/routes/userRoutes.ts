import { Router } from 'express';
import { addUser, loginUser } from '../controlles/userController';

const router = Router();

// Route to add a new user
router.post('/addUser', addUser);

// Route for user login
router.post('/login', loginUser);

export default router;
