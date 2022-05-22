module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: 'hsl(10, 79%, 65%)',
        },
        cyan: {
          DEFAULT: 'hsl(186, 34%, 60%)',
        },
        darkBrown: {
          DEFAULT: 'hsl(25, 47%, 15%)',
        },
        mediumBrown: {
          DEFAULT: 'hsl(28, 10%, 53%)',
        },
        cream: {
          DEFAULT: 'hsl(27, 66%, 92%)',
        },
        paleOrange: 'hsl(33, 100%, 98%)',
        stonyGray: '#d1cfc7',
      },
    },
    screens: {
      'sm-max': { max: '20rem' },
    },
  },
  plugins: [],
}
