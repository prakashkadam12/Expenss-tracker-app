import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Food', 'Transportation', 'Entertainment', 'Shopping', 'Utilities', 'Other']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

export const Expense = mongoose.model('Expense', expenseSchema);