/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        "blue":{
          "100":"#F8F8FD",
          "200":"rgba(248, 248, 253, 0.1)",
          "300":'#26A4FF',
          "400":'#4640DE'
          
        },
        "secondary":{"100":'#26A4FF',"200":'#4640DE'},
        "green":{
          "100":"#56CDAD",
          "200":"rgba(86, 205, 173, 0.1)"
        },
        "yellow":{
          "100":"#FFB836",
          "200":"rgba(255, 184, 54, 0.1)"
        },
        "red":{
          "100":"#FF6550",
          "200":"rgba(255, 101, 80, 0.1)"
        },
        "gray":"#515B6F",
        "dark":"#202430",
  
      }
      ,screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    }
  },
  plugins: [],
}