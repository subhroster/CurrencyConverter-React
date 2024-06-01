import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <CurrencyConverter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
