// src/components/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrencyConverter from "./CurrencyConverter";
import PasswordGenerator from "./PasswordGenerator";
// Import other components for additional routes

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<CurrencyConverter />} />
      <Route path="/passwordgenerator" element={<PasswordGenerator />} />
      {/* Add routes for other components */}
    </Routes>
  );
}

export default AppRouter;
