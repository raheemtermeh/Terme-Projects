// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1F2937",
//         skyBlue: "#3B82F6",
//         third: "#021526",
//         yellow: "#FFDB00",
//         green: "#6FDCE3",
//         pink: "#E84545",
//         victory: "#008c38",
//       },
//     },
//     fontFamily: {
//       sans: ["Zain", "Arial", "sans-serif"],
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
const { addUtilities } = require("tailwindcss-rtl");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#05070d",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["AIranianSans", "AIranianSans"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
