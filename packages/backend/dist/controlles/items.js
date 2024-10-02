"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.getItems = exports.addItem = void 0;
const ShoppingItem_1 = __importDefault(require("../models/ShoppingItem"));
// Add new item
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const newItem = yield ShoppingItem_1.default.create({ name });
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding item', error });
    }
});
exports.addItem = addItem;
// Get all items
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield ShoppingItem_1.default.findAll();
        res.status(200).json(items);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
});
exports.getItems = getItems;
// Remove an item
const removeItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const item = yield ShoppingItem_1.default.findByPk(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        yield item.destroy();
        res.status(200).json({ message: 'Item removed successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error removing item', error });
    }
});
exports.removeItem = removeItem;
