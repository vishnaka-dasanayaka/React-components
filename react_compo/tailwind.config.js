/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        channel_yellow: '#f9e130',
        channel_green: '#5ba130'
      }
    },
  },
  plugins: [],
}

