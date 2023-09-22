/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'oxfordBlue': '#000022',
      'oxfordBlueTransparent': '#000022df',
      'tekhelet': '#463285',
      'xanthous': '#ffc759',
      'xanthousTransparent': '#ffc759df',
      'periwinkle': '#dcd6f7',
      'moonstone': '#47a8bd',
      'white': '#ffffff'
    }
  },
  plugins: [],
}

