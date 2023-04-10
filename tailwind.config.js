/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',   
      'Background': '#071422',
      'Input': '#040F1A',
      'Profile': '#0B1B2B',
      'Border': '#1C2F41',
      'Label': '#3A536B',
      'Span': '#7B96B2',
      'Text': '#AFC2D4',
      'Subtitle': '#C4D4E3',
      'Title': '#E7EDF4',
      'Brand-blue': '#3294F8',
      'Post': '#112131'

   
    },
    fontFamily: {
      'Nunito': ['Nunito', 'sans-serif'],
      'Coda': ['Coda', 'cursive'],
      

    },
    
    extend: {},
  },
  plugins: [],
}

