/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        blackish: "#2D2D2D",
      },
      backgroundImage: {
        "wallet-gradient":
          "linear-gradient(270deg, #7928D2 0%, #399FE9 50%, #14F195 100%)",
      },
    },
  },
  plugins: [],
};
