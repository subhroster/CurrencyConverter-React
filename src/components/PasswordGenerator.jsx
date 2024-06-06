import { useState, useCallback, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function PasswordGenerator() {
  const { theme } = useTheme(); // Use theme context
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <section
      className={`flex-1 flex justify-center items-center h-screen w-full rounded ${
        theme === "dark"
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      } bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1530597/pexels-photo-1530597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div
        className={`bg-${
          theme === "dark" ? "dark-card" : "light-card"
        } bg-opacity-90 backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-lg w-80 p-6 ${
          theme === "dark" ? "text-dark-text" : "text-light-text"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-xl font-bold"
            style={{ color: theme === "dark" ? "#FF7E6B" : "#FE8040" }}
          >
            Password Generator
          </h2>
        </div>
        <div className="mb-4">
          <label htmlFor="length-input" className="block text-sm mb-2">
            Length:
          </label>
          <input
            id="length-input"
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className={`w-full px-2 py-1 rounded ${
              theme === "dark"
                ? "bg-dark-card border-gray-600 text-dark-text"
                : "bg-light-card border-gray-300 text-light-text"
            }`}
          />
        </div>
        <div className="mb-4">
          <input
            id="labels-range-input"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="mr-2"
            />
            Numbers (0-9)
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="mr-2"
            />
            Characters
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className={`w-full px-2 py-1 rounded ${
              theme === "dark"
                ? "bg-dark-card border-gray-600 text-dark-text"
                : "bg-light-card border-gray-300 text-light-text"
            } mb-2`}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`w-full ${
              theme === "dark" ? "bg-[#FF7E6B]" : "bg-[#FE8040]"
            } text-white py-1 rounded`}
          >
            Copy
          </button>
        </div>
        <button
          onClick={passwordGenerator}
          className={`w-full ${
            theme === "dark" ? "bg-[#FF7E6B]" : "bg-[#FE8040]"
          } text-white py-2 rounded`}
        >
          Generate
        </button>
        <p className="text-center mt-2 text-sm">Click on generate button.</p>
      </div>
    </section>
  );
}
