/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-bg": "url('/public/auth-bg.png')",
      },
    },
  },
  plugins: [],
};
