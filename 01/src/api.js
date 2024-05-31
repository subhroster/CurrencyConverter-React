const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = "https://currency-converter5.p.rapidapi.com/currency";

export const fetchCurrencyList = async () => {
  let apiCallCount = parseInt(localStorage.getItem("apiCallCount") || "0", 10);
  if (apiCallCount >= 100) {
    console.log("API call limit exceeded " + apiCallCount);
    return { error: "API call limit exceeded" };
  }

  apiCallCount += 1;
  localStorage.setItem("apiCallCount", apiCallCount);

  const url = `${BASE_URL}/list`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.currencies;
  } catch (error) {
    console.error("Error fetching currency list:", error);
    return { error: error.message };
  }
};

export const fetchConversionRate = async (from, to, amount) => {
  let apiCallCount = parseInt(localStorage.getItem("apiCallCount") || "0", 10);

  if (apiCallCount >= 100) {
    console.log("API call limit exceeded " + apiCallCount);
    return { error: "API call limit exceeded" };
  }

  apiCallCount += 1;
  localStorage.setItem("apiCallCount", apiCallCount);

  const url = `${BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching conversion rate:", error);
    return { error: error.message };
  }
};
