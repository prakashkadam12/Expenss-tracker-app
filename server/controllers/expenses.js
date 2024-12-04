import asyncHandler from 'express-async-handler';
import { Expense } from '../models/expense.js';

// Get all expenses
export const getExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

// Add new expense
export const addExpense = asyncHandler(async (req, res) => {
  const { title, amount, category, date, description } = req.body;

  if (!title || !amount || !category || !date) {
    res.status(400);
    throw new Error('Please provide all required fields');
  }

  const expense = await Expense.create({
    title,
    amount,
    category,
    date,
    description
  });

  res.status(201).json(expense);
});

// Delete expense
export const deleteExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(404);
    throw new Error('Expense not found');
  }

  await expense.deleteOne();
  res.json({ message: 'Expense removed' });
});

// Update expense
export const updateExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    res.status(404);
    throw new Error('Expense not found');
  }

  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.json(updatedExpense);
});