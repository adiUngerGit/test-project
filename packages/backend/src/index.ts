import express from 'express';
import cors from 'cors';
import sequelize from './db';
import userRoutes from './routes/userRoutes'
import shoppingRoutes from './routes/shoppingRoutes'
import itemRouts from './routes/itemRoutes'
// import photosRoutes from './routes/photosRouts'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sync the database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Use the user routes for /api path
app.use('/api', userRoutes);
app.use('/api', shoppingRoutes);
app.use('/api', itemRouts);

// app.use('/api', photoRoutes);


// Root route for health check
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
