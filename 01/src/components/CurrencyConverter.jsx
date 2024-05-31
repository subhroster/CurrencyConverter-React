import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : []; // This ensures options is an empty array if currencyInfo is undefined

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const BackgroundImage =
    "https://images.pexels.com/photos/68912/pexels-photo-68912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full max-w-md mx-auto p-5 bg-white bg-opacity-30 backdrop-blur-lg rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-2xl font-bold mb-4 animate-fadeIn">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={setAmount}
            />
          </div>
          <div className="relative w-full h-0.5 mb-4">
            <button
              type="button"
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
