// controllers/itemsController.ts
import { Request, Response } from 'express';
import ItemList from '../models/ItemList';
import Item from '../models/Item';

// Add a new item list
export const addItemList = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newList = await ItemList.create({ name });
    return res.status(201).json(newList);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating list', error });
  }
};

// Get all item lists
export const getItemLists = async (req: Request, res: Response) => {
  try {
    const lists = await ItemList.findAll({ include: { model: Item, as: 'items' } });
    return res.status(200).json(lists);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching lists', error });
  }
};

// Remove an item list
export const removeItemList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ItemList.destroy({ where: { id } });
    return res.status(200).json({ message: 'List deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting list', error });
  }
};

// Add a new item to a list
export const addItem = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const { listId } = req.params;
    const newItem = await Item.create({ name, listId });
    return res.status(201).json(newItem);
  } catch (error) {
    return res.status(500).json({ message: 'Error adding item', error });
  }
};

// Get all items in a specific list
export const getItems = async (req: Request, res: Response) => {
  try {
    const { listId } = req.params;
    const items = await Item.findAll({ where: { listId } });
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching items', error });
  }
};

// Remove an item from a list
export const removeItem = async (req: Request, res: Response) => {
  try {
    const { id, listId } = req.params;
    await Item.destroy({ where: { id, listId } });
    return res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting item', error });
  }
};
