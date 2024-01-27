/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gsradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        bgColor: "#151c2c",
        bgSoft: "#182237",
        textSoft: "#b7bac1",
      },
      textColor: {
        bgColor: "#151c2c",
        bgSoft: "#182237",
        textSoft: "#b7bac1",
      },
    },
  },
  plugins: [],
};
