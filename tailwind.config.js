/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage : {
      'blueShade' : 'linear-gradient(91deg, #DEE5FF 0.79%, #809AFF 99.18%)',
      'createAccountBtn' : 'linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)',
      'alertShade' :'linear-gradient(90deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0.00) 76.45%)',
      'dateGradient': 'linear-gradient(270deg, #8DA4FF -0.62%, #D1DBFF 100.68%)',
      'taskGradient' : 'linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)'
    },
    fontFamily : {
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'upcomingWorkoutShadow': '-4px 8px 25px -8px rgba(0, 0, 0, 0.15)', // Custom shadow properties
      },
      colors :{
        'black' : "#2C2B2B",
        'gray-50' :'#F1F1F1',
        'gray-100' : '#7F7F7F'
      }
    },
  },
  plugins: [],
}

