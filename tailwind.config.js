/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokeball': "url('D:\coding\pokemon-app\src\img\pokeball.jpg')"
      },
      fontFamily: {
        pokemon1: ["Pokemon1", "solid"],
        pokemon2: ["Pokemon2", "solid"],
      },
    },
  },
  plugins: [],
}
