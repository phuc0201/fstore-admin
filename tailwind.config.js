/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        'card': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
      },
      colors: {
        'primary': '#696cff',
        'primary-hover': '#696cff29',
        'web-background': '#eff0f7',
        'white': '#fff',
        'white1': '#f1f1f5',
        'blue': '#4a40e7',
        'blue1': '#e9eeff',
        'red': '#ef5350',
        'red1': '#ef3e3e',
        'green': '#42cd74',
        'green1': '#4CE5B1',
        'green2': '#ace3c4',
        'green3': '#ace3c426',
        'green4': '#ccefdb',
        'green5': '#ace3c42b',
        'grey': '#717176',
        'grey1': '#676767',
        'orange1': '#ff7903',
        'black1': '#1E1D23',
        'yellow1': '#FC8A06',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    })
  ],
}

