// routes/itemRoutes.ts
import { Router } from 'express';
import { addItem, getItems, removeItem, addItemList, getItemLists, removeItemList } from '../controlles/itemsController';

const router = Router();

// Routes for Item Lists
router.post('/lists', addItemList); // Add a new list
router.get('/lists', getItemLists); // Get all lists
router.delete('/lists/:id', removeItemList); // Delete a list by ID

// Routes for Items within a List
router.post('/lists/:listId/items', addItem); // Add a new item to a specific list
router.get('/lists/:listId/items', getItems); // Get all items in a specific list
router.delete('/lists/:listId/items/:id', removeItem); // Delete an item by ID from a specific list

export default router;
