/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.tsx"],
  theme: {
    extend: {
      screens:{
        sm: '640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
        xlg: '1600px'
      },
    },
  },
  plugins: [],
}

