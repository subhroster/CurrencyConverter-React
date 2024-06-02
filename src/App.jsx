// src/App.js
import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Wrap your application with BrowserRouter */}
        <Layout>
          {/* No need to render Sidebar and MainContent here, they're handled by Layout */}
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
