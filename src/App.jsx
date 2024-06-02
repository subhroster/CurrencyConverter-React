import React from "react";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 flex justify-center items-center">
          <MainContent />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
