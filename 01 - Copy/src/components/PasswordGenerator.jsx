import { useState, useCallback, useEffect, useRef } from "react";
function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [btnText, setBtnText] = useState("Copy");
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);

  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(password);
    setBtnText("Copied");
    setTimeout(() => {
      setBtnText("Copy");
      // Clear the selection
      window.getSelection().removeAllRanges();
    }, 1000);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    const password = Array.from({ length })
      .map(() => str[Math.floor(Math.random() * str.length)])
      .join("");
    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // for (let i = 0; i <= length; i++) {
  //   let char = Math.floor(Math.random() * str.length + 1);
  //   pass += str.charAt(char);
  // }

  //     setPassword(pass);
  //   }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-4xl">Password Generator</h1>
      <div className="w-full flex flex-col items-center bg-gray-700 p-4 rounded-lg m-10 text-orange-300">
        <div className="flex mb-4 overflow-hidden rounded-lg">
          <input
            type="text"
            name="password"
            value={password}
            readOnly
            id=""
            placeholder="Password"
            className="outline-none w-full py-1 px-3 text-black"
            ref={passRef}
          />
          <button
            className="outline-none bg-blue-300 px-3 py-1 rounded-r-lg shrink-0 text-white"
            onClick={copyToClipboard}
          >
            {btnText}
          </button>
        </div>
        <div className="flex test-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              //callback to access previous value
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
