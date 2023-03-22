/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.tsx',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
          'sans':'Roboto, sans-serif'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
