import { Request, Response } from 'express';
import User from '../models/user';
export const addUser = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;  // Include password in the body
  
      if (!username || !email || !password) {  // Check that password is not missing
        return res.status(400).json({ error: 'All fields (username, email, password) are required' });
      }
  
      const newUser = await User.create({ username, email, password });
  
      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };
// Controller for login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to log in' });
  }
};
