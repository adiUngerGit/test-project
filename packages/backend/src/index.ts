import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

console.log('Hello from the backend!');
app.use(cors());
app.use(express.json());

app.get('/api/info', (req: Request, res: Response) => {
  res.json({ message: 'phone number: 123345' });
});

app.post('/api/message', (req: Request, res: Response) => {
    const { message } = req.body;
    res.json({ message });
})
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
