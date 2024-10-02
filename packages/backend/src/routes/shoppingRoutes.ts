// routes/shoppingRoutes.ts
import { Router } from 'express';
const express = require('express');
import { addItem, getItems, removeItem } from '../controlles/itemsController';

const router = Router();

// Routes for Shopping List
router.post('/items', addItem);
router.get('/items',getItems);
router.delete('/items/:id', removeItem);

export default router;
