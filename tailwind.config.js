/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(0.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        scaleUp: {
          " 0% ": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        clkButton: "scaleUp 0.3s ease-in-out",
      },
    },
    fontFamily: {
      Rubik: ["Rubik"],
      Sono: ["Sono", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
