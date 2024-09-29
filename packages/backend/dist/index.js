"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
console.log('Hello from the backend!');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/info', (req, res) => {
    res.json({ message: 'phone number: 123345' });
});
app.post('/api/message', (req, res) => {
    const { message } = req.body;
    res.json({ message });
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
