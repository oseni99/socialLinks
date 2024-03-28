/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        BigWhite: 'hsl(0, 0%, 85%',
        Grey: 'hsl(0, 0%, 20%)',
        DarkGrey: 'hsl(0, 0%, 12%)',
        OffBlack: 'hsl(0, 0%, 8%)',
        BigGreen: 'hsl(75, 94%, 57%)',
      },
      fontFamily: {
        'Body': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

