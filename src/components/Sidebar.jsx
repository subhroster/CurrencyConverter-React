import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const { theme } = useTheme();
  return (
    <aside className="w-64 p-4 bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
      <nav>
        <ul className="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-3 text-gray-900 dark:text-white bg-blue-700 rounded-lg active w-full"
            >
              Currency Converter
            </Link>
          </li>
          <li>
            <Link
              to="/PasswordGenerator"
              className="inline-flex items-center px-4 py-3 text-gray-900 dark:text-white bg-blue-700 rounded-lg active w-full"
            >
              Password Generator
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
