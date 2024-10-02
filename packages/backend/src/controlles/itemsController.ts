// controllers/shoppingController.ts
import { Request, Response } from 'express';
import ShoppingItem from '../models/ShoppingItem';

// Add new item
export const addItem = async (req: Request, res: Response) => {
  console.log(req.body + "hii from add item");
  try {
    const { name } = req.body;
    const newItem = await ShoppingItem.create({ name });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error });
  }
};

// Get all items
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await ShoppingItem.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};

// Remove an item
export const removeItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await ShoppingItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await item.destroy();
    res.status(200).json({ message: 'Item removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing item', error });
  }
};
