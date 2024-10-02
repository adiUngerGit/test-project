"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/shoppingRoutes.ts
const express_1 = require("express");
const express = require('express');
const itemsController_1 = require("../controlles/itemsController");
const router = (0, express_1.Router)();
// Routes for Shopping List
router.post('/items', itemsController_1.addItem);
router.get('/items', itemsController_1.getItems);
router.delete('/items/:id', itemsController_1.removeItem);
exports.default = router;
