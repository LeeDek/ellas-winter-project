/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure your React files are being included
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
