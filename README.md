# Currency Converter Project Documentation

## Overview
This project is a React-based web application that allows users to convert currency values from one currency to another. It utilizes the Currency Converter API for fetching exchange rates and includes features like API call limit tracking and user-friendly validation messages. The project is styled using Tailwind CSS and includes various modern React functionalities and best practices.

### Vite

The project is set up using Vite for a faster and leaner development experience.

## Features and Functionalities

1. **Currency Conversion**:
    - Users can convert an amount from one currency to another using the latest exchange rates.
    - Provides a list of supported currencies fetched from the Currency Converter API.

2. **API Call Limit Tracking**:
    - Tracks the number of API calls made and displays a warning when the limit is approaching.Limits the number of API calls to prevent overuse.
    - Resets the API call count every day.

3. **Input Validation**:
    - Validates user input and displays appropriate error messages if required fields are not filled.

4. **Responsive Design**:
    - The application is fully responsive and optimized for different screen sizes.
    - Styled using Tailwind CSS for a modern and consistent look and feel.

5. **Interactive UI**:
    - Includes animations and button pressed effects for better user interaction.
    - Uses icons from the `react-icons` library to enhance the UI.

## Project Structure
```
src/
│
├── api.js
├── components/
│ ├── CurrencyConverter.jsx
│ └── InputBox.jsx
├── hooks/
│ └── useCurrencyInfo.js
├── App.jsx
├── index.js
└── styles.css
```
## Components

### CurrencyConverter.jsx

This component is the main container for the currency conversion functionality. It handles user inputs, API calls, and state management.

- **State Variables**:
  - `amount`: The amount to be converted.
  - `from`: The currency to convert from.
  - `to`: The currency to convert to.
  - `convertedAmount`: The result of the conversion.
  - `apiCallCount`: Tracks the number of API calls made.
  - `warningMessage`: Displays warning messages to the user.
  - `validationMessage`: Displays validation messages if inputs are invalid.

- **Functions**:
  - `swap()`: Swaps the `from` and `to` currencies.
  - `convert()`: Performs the currency conversion using the API and updates the state.
  - `useEffect()`: Initializes the API call count from localStorage on component mount.

- **JSX**:
  - Renders the input fields, swap button, and convert button.
  - Displays warning and validation messages as needed.

### InputBox.jsx

This component renders an input field for the amount and a dropdown for selecting the currency.

- **Props**:
  - `label`: Label for the input field.
  - `amount`: The amount to be converted.
  - `onAmountChange`: Handler for updating the amount.
  - `onCurrencyChange`: Handler for updating the selected currency.
  - `currencyOptions`: List of available currencies.
  - `selectCurrency`: The currently selected currency.
  - `amountDisable`: Disables the amount input field if true.
  - `currencyDisable`: Disables the currency dropdown if true.
  - `className`: Additional classes for styling.

- **JSX**:
  - Renders an input field and a dropdown for currency selection.
  - Ensures that each option in the dropdown has a unique key.

## Hooks

### useCurrencyInfo.js

This custom hook fetches the list of supported currencies from the Currency Converter API.

- **State Variables**:
  - `data`: Stores the fetched currency data.
  - `error`: Stores any errors encountered during the fetch.

- **useEffect()**:
  - Fetches the currency data from the API when the component mounts.

## API Integration

### api.js

This file contains functions for interacting with the Currency Converter API.

- **fetchCurrencyList()**:
  - Fetches the list of supported currencies.
  - Tracks and updates the API call count in localStorage.

- **fetchConversionRate(from, to, amount)**:
  - Fetches the conversion rate for the specified currencies and amount.
  - Tracks and updates the API call count in localStorage.

  ## State Management

State management in this project is handled using React's `useState` and `useEffect` hooks. Here are some examples:

- **useState**:
  - `const [amount, setAmount] = useState(0);`
    - Initializes the `amount` state variable with a default value of 0.
    - `setAmount` is the function to update this state variable.

  - `const [apiCallCount, setApiCallCount] = useState(0);`
    - Initializes the `apiCallCount` state variable with a default value of 0.
    - `setApiCallCount` is the function to update this state variable.

- **useEffect**:
   ```javascript
    useEffect(() => {
      const apiCallData = JSON.parse(localStorage.getItem("apiCallData")) || {
        count: 0,
        lastReset: Date.now(),
      };
      setApiCallCount(apiCallData.count);
      console.log(`API Call Count on load: ${apiCallData.count}`);
    }, []);
    ```
    - This effect runs when the component mounts, initializing the API call count from localStorage.


## Styling

### Tailwind CSS

The application uses Tailwind CSS for styling. Some key classes used include:

- `w-full`, `h-screen`: For full width and height.
- `flex`, `justify-center`, `items-center`: For centering content.
- `bg-cover`, `bg-no-repeat`: For background images.
- `p-5`, `rounded-lg`, `shadow-lg`: For padding, rounded corners, and shadows.
- `transition-transform`, `hover:scale-105`: For animations and hover effects.

## Icons

Icons are used from the `react-icons` library to enhance the UI. For example:

import { FiArrowRight, FiRepeat } from "react-icons/fi";
## How to Run
*Clone the Repository:*

``` bash
git clone <repository_url>
cd <repository_folder>
```
**Install Dependencies:**

```bash
npm install
```
**Set Up Environment Variables:**

Create a .env file in the root directory.
Add your RapidAPI key:

```VITE_RAPIDAPI_KEY=your_rapidapi_key```

**Run the Application:**

```
npm start
```
**Deployment on Netlify**

The Currency Converter application is deployed on Netlify, providing users with a live and accessible version of the app.

**Deployment URL:** [Currency Converter App](https://currencyconverterv1.netlify.app/)



## Steps to Deploy on Netlify

Create a Netlify Account: If you don’t have a Netlify account, create one at Netlify.

Connect Your Repository: Link your GitHub repository to Netlify. This allows Netlify to pull your project files directly from GitHub.

**Configure Build Settings:**

**Build Command:** ```npm run build```

**Publish Directory:** ```dist```

**Add Environment Variables:**

- Go to your site's settings in Netlify.
- Navigate to Build & Deploy > Environment > Environment Variables.
- Add a new variable:
- Key: ```VITE_RAPIDAPI_KEY```
- Value: Your API key from RapidAPI.

**Deploy Site:** Click on Deploy Site to start the deployment process. Netlify will build and deploy your site automatically.

**Verify Deployment:** Once the deployment is complete, visit your site to ensure everything is working correctly.

## Conclusion
This project demonstrates the use of React for building a dynamic and responsive web application. It includes essential features such as API integration, state management, input validation, and responsive design using Tailwind CSS. The application is structured to be easily extendable and maintainable.