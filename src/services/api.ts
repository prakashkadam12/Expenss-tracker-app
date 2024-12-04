import axios from 'axios';
import { Expense } from '../types/expense';

const API_URL = 'http://localhost:5000/api';

export const api = {
  getExpenses: () => axios.get<Expense[]>(`${API_URL}/expenses`),
  addExpense: (expense: Omit<Expense, '_id'>) => 
    axios.post<Expense>(`${API_URL}/expenses`, expense),
  deleteExpense: (id: string) => 
    axios.delete(`${API_URL}/expenses/${id}`),
  updateExpense: (id: string, expense: Omit<Expense, '_id'>) => 
    axios.put<Expense>(`${API_URL}/expenses/${id}`, expense)
};