import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    //let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("Fetched data:", res);
        setData(res[currency.toLowerCase()]);
      })
      .catch((error) => setError(error.message));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
