/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
      },
      fill: {
        linkedin: '#0077B5',
        twitter: '#1DA1F2',
        github: '#181717' // GitHub's color

      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
         sans: ['Catamaran', 'sans-serif'],
         montserrat: ['Montserrat', 'sans-serif'],
         arial: ['Arial', 'sans-serif'],
      },
      backgroundColor:{
'bg---;':'background-color: rgb(43, 107, 226);',
linkedin: '#0077B5',
twitter: '#1DA1F2',
github: '#181717'
      },
      borderColor: {
        twitter: '#1DA1F2'}
    },
  },
  plugins: [],
}

// tailwind.config.js
