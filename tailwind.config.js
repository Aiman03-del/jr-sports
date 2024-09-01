/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#E0F7FA", // হালকা নীল
        "blue-500": "#0288D1", // নীল
        "gray-900": "#212121", // গাঢ় ধূসর
      },
    },
  },
  plugins: [],
};
