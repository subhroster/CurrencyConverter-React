module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      colors: {
        customGray: "rgb(17, 24, 39)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
