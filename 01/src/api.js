const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = "https://currency-converter5.p.rapidapi.com/currency";
const MAX_API_CALL_COUNT = 100;

// Function to get the API call count and reset if a day has passed
const getApiCallCount = () => {
  const apiCallData = JSON.parse(localStorage.getItem("apiCallData")) || {
    count: 0,
    lastReset: Date.now(),
  };
  const currentTime = Date.now();
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

  if (currentTime - apiCallData.lastReset > oneDay) {
    apiCallData.count = 0;
    apiCallData.lastReset = currentTime;
    localStorage.setItem("apiCallData", JSON.stringify(apiCallData));
  }

  console.log(`API Call Count: ${apiCallData.count}`);
  return apiCallData.count;
};

// Function to increment the API call count
const incrementApiCallCount = () => {
  const apiCallData = JSON.parse(localStorage.getItem("apiCallData")) || {
    count: 0,
    lastReset: Date.now(),
  };
  apiCallData.count += 1;
  localStorage.setItem("apiCallData", JSON.stringify(apiCallData));
  console.log(`API Call Count incremented to: ${apiCallData.count}`);
};

export const fetchCurrencyList = async () => {
  let apiCallCount = getApiCallCount();
  if (apiCallCount >= MAX_API_CALL_COUNT) {
    console.log("API call limit exceeded " + apiCallCount);
    return { error: "API call limit exceeded" };
  }

  incrementApiCallCount();

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
  let apiCallCount = getApiCallCount();

  if (apiCallCount >= MAX_API_CALL_COUNT) {
    console.log("API call limit exceeded " + apiCallCount);
    return { error: "API call limit exceeded" };
  }

  incrementApiCallCount();

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
