import { useState, useCallback } from 'react';
import { Expense } from '../types/expense';
import { api } from '../services/api';

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const loadExpenses = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await api.getExpenses();
      setExpenses(response.data);
    } catch (err) {
      setError('Failed to load expenses');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addExpense = useCallback(async (expense: Omit<Expense, '_id'>) => {
    setError('');
    try {
      const response = await api.addExpense(expense);
      setExpenses(prev => [...prev, response.data]);
      return true;
    } catch (err) {
      setError('Failed to add expense');
      return false;
    }
  }, []);

  const deleteExpense = useCallback(async (id: string) => {
    setError('');
    try {
      await api.deleteExpense(id);
      setExpenses(prev => prev.filter(expense => expense._id !== id));
      return true;
    } catch (err) {
      setError('Failed to delete expense');
      return false;
    }
  }, []);

  return {
    expenses,
    error,
    isLoading,
    loadExpenses,
    addExpense,
    deleteExpense
  };
}