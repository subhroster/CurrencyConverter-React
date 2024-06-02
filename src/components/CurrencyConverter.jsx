import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { fetchConversionRate } from "../api";
import { FiArrowRight, FiRepeat } from "react-icons/fi";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [apiCallCount, setApiCallCount] = useState(0);
  const [warningMessage, setWarningMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const { data: currencyInfo, error } = useCurrencyInfo();
  const options = Object.keys(currencyInfo);
  const MAX_API_CALL_COUNT = 100;

  useEffect(() => {
    const apiCallData = JSON.parse(localStorage.getItem("apiCallData")) || {
      count: 0,
      lastReset: Date.now(),
    };
    setApiCallCount(apiCallData.count);
    console.log(`API Call Count on load: ${apiCallData.count}`);
  }, []);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = async () => {
    console.log("Convert function called");
    if (amount === 0) {
      setValidationMessage("Please enter a valid amount to convert.");
      return;
    } else {
      setValidationMessage("");
    }

    if (apiCallCount >= 90) {
      setWarningMessage(
        `Warning: You have ${
          MAX_API_CALL_COUNT - apiCallCount
        } API calls left today.`
      );
    }

    const data = await fetchConversionRate(from, to, amount);
    if (data.error) {
      if (data.error === "API call limit exceeded") {
        setWarningMessage(
          "API call limit exceeded. Please try again tomorrow."
        );
      } else {
        console.error("Conversion error:", data.error);
      }
      return;
    }

    if (data && data.rates && data.rates[to]) {
      const newConvertedAmount = parseFloat(data.rates[to].rate) * amount;
      setConvertedAmount(isNaN(newConvertedAmount) ? 0 : newConvertedAmount);
    } else {
      console.error("Conversion rate not found in the API response");
    }

    const newApiCallCount = apiCallCount + 1;
    setApiCallCount(newApiCallCount);
    localStorage.setItem("apiCallCount", newApiCallCount);
  };

  return (
    <section className="items-center justify-center bg-blue-100 p-4 rounded shadow-md mb-4 ">
      {/* <div className="flex flex-col items-center justify-center w-full h-full"> */}
      <h1 className="text-2xl font-bold mb-4 text-center">
        Currency Converter
      </h1>
      {warningMessage && (
        <div className="bg-yellow-200 text-yellow-800 p-2 mb-4 rounded">
          {warningMessage}
        </div>
      )}
      {validationMessage && (
        <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
          {validationMessage}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="w-full mb-1">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(isNaN(amount) ? 0 : amount)}
          />
        </div>
        <div className="relative w-full h-12 mb-4 mt-4 flex justify-center items-center">
          <button
            type="button"
            className="border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2 flex items-center space-x-2 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={swap}
          >
            <FiRepeat className="mr-2" />
            <span>Swap</span>
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
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
          <FiArrowRight className="ml-2" />
        </button>
      </form>
      {/* </div> */}
    </section>
  );
}

export default CurrencyConverter;
