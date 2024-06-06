module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FE8040", // Orange Crayola
          dark: "#FF7E6B", // Salmon
        },
        secondary: {
          light: "#FF7E6B", // Salmon
          dark: "#A67C80", // Muted Rose Taupe
        },
        tertiary: {
          light: "#8C5E58", // Rose Taupe
          dark: "#4E3A39", // Dark Rose Taupe
        },
        accent: {
          light: "#A9F0D1", // Aquamarine
          dark: "#72C9B9", // Soft Aquamarine
        },
        light: {
          background: "#FFF7F8", // Snow
          card: "#FFFFFF", // White
          text: "#333333", // Dark Gray
        },
        dark: {
          background: "#1A1A1A", // Dark Charcoal
          card: "#2E2E2E", // Charcoal Gray
          text: "#CCCCCC", // Light Gray
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
