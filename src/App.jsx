import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col">
        <CurrencyConverter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
