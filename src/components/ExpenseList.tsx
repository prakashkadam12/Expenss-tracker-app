import React from "react";
import { Trash2 } from "lucide-react";
import { Expense } from "../types/expense";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-600">Expense Tracker</h2>
        <div className="text-xl font-medium">
          Total:{" "}
          <span className="text-blue-600 font-bold">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-left">
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3 text-right">Amount</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense._id}
                className="hover:bg-gray-100 border-b border-gray-300"
              >
                <td className="px-6 py-3">{expense.date}</td>
                <td className="px-6 py-3">{expense.title}</td>
                <td className="px-6 py-3">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {expense.category}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">${expense.amount.toFixed(2)}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => expense._id && onDelete(expense._id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
