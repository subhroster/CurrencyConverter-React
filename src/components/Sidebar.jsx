// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-gray-100">
      <nav>
        <ul className="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="#"
              className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <a className="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
              Disabled
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
