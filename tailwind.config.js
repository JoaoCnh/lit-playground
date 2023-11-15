/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.tsx",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
