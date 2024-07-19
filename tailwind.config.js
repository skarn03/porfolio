// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBeige: '#F5F5DC',
        darkBeige: '#A52A2A',
        beige: '#D2B48C',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Saira: ["Saira", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}