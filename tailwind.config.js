/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [require("@codaworks/react-glow/tailwind")],
};
