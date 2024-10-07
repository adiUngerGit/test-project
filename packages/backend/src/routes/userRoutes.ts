import { Router } from 'express';
import { addUser, editUser, loginUser } from '../controlles/userController';

const router = Router();

// Route to add a new user
router.post('/addUser', addUser);

// Route for user login
router.post('/login', loginUser);

router.put('/editUser/:id', editUser);

export default router;
