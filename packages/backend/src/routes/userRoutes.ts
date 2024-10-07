import { Router } from 'express';
import { addUser, editUser, loginUser } from '../controlles/userController';

const router = Router();

router.post('/addUser', addUser);

router.post('/login', loginUser);

router.put('/editUser/:id', editUser);

export default router;
