import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Project Title */}
        <h1 className="text-3xl font-extrabold text-white">
          <NavLink to="/" className="hover:text-yellow-300">
            Expense Tracker
          </NavLink>
        </h1>

        {/* Navigation Menu */}
        <nav className="flex justify-center flex-grow ">
          <ul className="flex space-x-8">
            {/* Home Link */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive ? "text-yellow-300" : "hover:text-yellow-300"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            {/* About Link */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive ? "text-yellow-300" : "hover:text-yellow-300"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            {/* Contact Link */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive ? "text-yellow-300" : "hover:text-yellow-300"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
