/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        lightGray: "#F0F2F5",
        darkGray: "#344054",
        blue: "#0D6EFD",
        darkBlue: "#0A369D",
        brown: "#7A4504"
      },
    },
  },
  plugins: [],
};

