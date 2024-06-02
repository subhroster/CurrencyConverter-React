import { useState, useCallback, useEffect, useRef } from "react";

export default function PasswordGenerator() {
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
  }, [length, numberAllowed, charAllowed, setPassword]);

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
      className="flex-1 flex justify-center h-full w-full rounded mb-4 bg-gray-100 dark:bg-gray-800  text-gray-500 dark:text-gray-400 shadow-md  bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1530597/pexels-photo-1530597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
      }}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg border items-center justify-center  border-white border-opacity-30 rounded-lg shadow-lg w-1/2 h-1/2 flex flex-col p-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Password Generator
          </h2>
          <div className="flex flex-row mb-4 w-full h-1/4 rounded-lg">
            {" "}
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 min-w-40"
            >
              copy
            </button>
          </div>

          <div className="flex w-full justify-between mb-3">
            <label htmlFor="length-input" className="text-left">
              Length:
            </label>
            <input
              id="length-input"
              type="number"
              value={length}
              className="flex text-right w-1/12"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* length input */}
          <div className="flex w-full justify-between mb-4">
            <input
              id="labels-range-input"
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          {/* range input */}
          <div className="flex w-full mb-4">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers (0-9)</label>
          </div>
          <div className="flex w-full">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          {/* numeber checkbox */}
        </div>
      </div>
    </section>
  );
}
