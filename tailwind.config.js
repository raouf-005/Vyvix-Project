import {nextui} from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bgdm': 'rgba(22, 11, 55, 1)'
        ,'carddm':'#1E1144'
        ,'ltdm':'#2A1B4B'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}