// src/components/Layout.jsx
import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AppRouter from "./AppRouter"; // Use the renamed component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 flex justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
          <AppRouter /> {/* Use the renamed component here */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
