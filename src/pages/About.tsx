import React from "react";

export function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
          About Us
        </h2>

        {/* Introduction Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Welcome to Expense Tracker</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Expense Tracker is designed to help you manage your finances effectively. 
            By allowing you to track, categorize, and analyze your expenses, it gives you a clear 
            understanding of where your money goes. Whether you're budgeting for the month or just 
            trying to get a better grip on your spending, this app makes it easy to keep track of your financial health.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Key Features</h3>
          <ul className="list-inside list-disc text-lg text-gray-700">
            <li>Track expenses by category (e.g., Food, Transportation, Entertainment)</li>
            <li>View detailed overviews of your spending habits</li>
            <li>Set financial goals and monitor your progress</li>
            <li>User-friendly interface for easy navigation and tracking</li>
          </ul>
        </section>

        {/* Conclusion Section */}
        <section>
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Why Use Expense Tracker?</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            By using the Expense Tracker, you can gain a better understanding of your financial habits and 
            start saving for your future. Whether you’re planning for a vacation, a major purchase, or just 
            want to see where your money is going, our app provides you with all the tools you need for a 
            smarter financial life.
          </p>
        </section>
      </div>
    </div>
  );
}
