import React from "react";
import { ExpenseForm } from "../components/ExpenseForm";
import { ExpenseList } from "../components/ExpenseList";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { useState } from "react";
import { Expense } from "../types/expense";

export function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Omit<Expense, "_id">) => {
    const newExpense = { ...expense, _id: crypto.randomUUID() };
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense._id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <ExpenseForm onSubmit={addExpense} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </ErrorBoundary>
  );
}
