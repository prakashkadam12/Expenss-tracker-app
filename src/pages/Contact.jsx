import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-0 mb-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl motion-safe:hover:scale-105 motion-safe:hover:shadow-xl">
        <h1 className="mb-4 text-2xl font-semibold text-center text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
          Contact Us
        </h1>
        <p className="mb-6 text-gray-600 text-center animate__animated animate__fadeIn animate__delay-2s">
          Thank you for using our Expense Tracker App! If you have any questions,
          feedback, or issues, feel free to reach out to us. We’re here to help.
        </p>
        <div className="space-y-4">
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <h2 className="text-lg font-medium text-gray-700">Email:</h2>
            <p className="text-gray-600">support@expensetracker.com</p>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-4s">
            <h2 className="text-lg font-medium text-gray-700">Phone:</h2>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-5s">
            <h2 className="text-lg font-medium text-gray-700">Address:</h2>
            <p className="text-gray-600">123 Expense St, Finance City, CA 90210</p>
          </div>
        </div>
        <div className="mt-6 animate__animated animate__fadeIn animate__delay-6s">
          <h2 className="text-lg font-medium text-gray-700">About Expense Tracker:</h2>
          <p className="mt-2 text-gray-600">
            Our Expense Tracker App helps you monitor your spending, manage your
            finances, and achieve your savings goals. Stay on top of your budget
            with real-time tracking and detailed reports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
