const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#db0a5b',
        bcNavy: '#11143d',
        bcCharcoal: '#404041',
        bcPurple: '#971b50',
        bcLightpink: '#f6c2d6',
        bcTeal: '#19a2b8',
        bcBlue: '#006cb6',
        bcLightblue: '#bfdaed',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        karla: ['Karla', ...defaultTheme.fontFamily.serif],
        cocogooseProCm: ['CocogooseProCm', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
