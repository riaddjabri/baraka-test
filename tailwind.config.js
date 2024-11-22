/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to include your source files
  ],
  theme: {
    extend: {
      colors: {
        'secondary-black': '#191919',
        'secondary-grey': '#303030',
        'disabled': '#5F5F5F'
      },
      borderRadius: {
        DEFAULT: '1.5rem',
        'large': '0.875rem'
      },
    },
  },
  plugins: [],
}

