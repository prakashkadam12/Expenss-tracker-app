import express from 'express';
import {
  getExpenses,
  addExpense,
  deleteExpense,
  updateExpense
} from '../controllers/expenses.js';

const router = express.Router();

router.route('/')
  .get(getExpenses)
  .post(addExpense);

router.route('/:id')
  .delete(deleteExpense)
  .put(updateExpense);

export const expenseRoutes = router;