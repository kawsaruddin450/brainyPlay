/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nerko': ["Nerko One", 'cursive']
    }
  },
  plugins: [
    // eslint-disable-next-line
    require('daisyui'),
  ],
}

