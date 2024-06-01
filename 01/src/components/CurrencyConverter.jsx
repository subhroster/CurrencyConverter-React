import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { fetchConversionRate } from "../api";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [apiCallCount, setApiCallCount] = useState(0);
  const [warningMessage, setWarningMessage] = useState("");

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

    if (apiCallCount >= 10) {
      // Adjusted for testing purposes
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

    // Update the local state and local storage with the new API call count
    const newApiCallCount = apiCallCount + 1;
    setApiCallCount(newApiCallCount);
    localStorage.setItem("apiCallCount", newApiCallCount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {warningMessage && (
            <div className="bg-yellow-200 text-yellow-800 p-2 mb-4 rounded">
              {warningMessage}
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
                onAmountChange={(amount) =>
                  setAmount(isNaN(amount) ? 0 : amount)
                }
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
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
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
