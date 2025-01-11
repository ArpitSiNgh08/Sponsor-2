/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bd': '#D9D9D9',
      },
      fontFamily: {
        pirata: ['Pirata One', 'sans-serif'],
      },
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        humanistika: ['"Linotype Humanistika W01"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '360px', 
      },

    },
  },
  plugins: [],
};


