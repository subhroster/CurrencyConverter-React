import React from "react";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 flex justify-center items-center  bg-gray-100 dark:bg-gray-900  text-gray-500 dark:text-gray-400">
            <MainContent />
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
