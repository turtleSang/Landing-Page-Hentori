/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {

      },
      colors: {
        background: {
          1: "#C2FCF3",
          2: "#8F714B",
          3: "#B8A99A",
          4: "#C58325"
        },
        letter: {
          light: "#FFF8F0",
          dark: "#402E32"
        },
        component: {
          2: "#005B4D"
        }
      }
    },
  },
  plugins: [],
}

