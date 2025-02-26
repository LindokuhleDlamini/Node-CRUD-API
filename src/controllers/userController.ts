import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const register = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    const user = await userService.registerUser(email, password, name);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await userService.loginUser(username, password);
    res.json({ token });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
