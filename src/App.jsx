import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordGenerator from "./components/PasswordGenerator";
import Header from "./components/Header"; // Import Header component

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header /> {/* Render the Header component */}
        <Routes>
          <Route path="/" element={<PasswordGenerator />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
