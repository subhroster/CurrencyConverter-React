import { useState, useEffect } from "react";
import { fetchCurrencyList } from "../api"; // Adjust the import path as needed

function useCurrencyInfo() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const currencyList = await fetchCurrencyList();
        setData(currencyList);
      } catch (error) {
        setError(error.message);
      }
    };

    getCurrencies();
  }, []);

  return { data, error };
}

export default useCurrencyInfo;
