module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(239 68 68)',
        secondary: {
          veryLightGray: 'rgb(229 231 235)',
          lightGray: 'rgb(156 163 175)',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
