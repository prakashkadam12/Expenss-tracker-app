import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { expenseRoutes } from './routes/expenses.js';
import { errorHandler } from './middleware/errorHandler.js';
import { contactRoutes } from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use('/api/expenses', expenseRoutes);
app.use('/api/contact', contactRoutes);

// Error Handler
app.use(errorHandler);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/testDB')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });