/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-background': '#05191A',
        'clr-main-dark': '#082627',
        'clr-secondary-dark': '#AA60C8',
        'clr-main-bright': '#AA60C8',
        'clr-secondary-bright': '#9b5ab5',
        'clr-off-white': '#F4F4F4',
        'clr-bg-btn-1': 'rgba(1, 242, 153, 0.05)',
        'clr-bg-btn-2': 'rgba(1, 242, 153, 0.1)',
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      maxWidth: {
        'max-width': '1366px',
        'max-custom': '1437px',
      },
      minWidth: {
        'max-width': '1366px',
        'max-custom': '1437px',
      },
      width: {
        '90vw': '90vw',
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
      },
      backgroundImage: {
        bgBtn: "url('/public/btn_bg.png')",
      },
      // dropShadow : {
      //   'btn_shadow' : '46px 46px 40px rgba(4, 22, 23, 0.2)'
      // },
      boxShadow: {
        btn_shadow: '46px 46px 40px rgba(4, 22, 23, 0.2)',
        bene_shadow: '0px 15px 30px -12px rgba(4, 22, 23, 0.2)',
      },
      gradientColorStopPositions: {
        33: '33%',
      },
      screens: {
        'S-xl': '1600px',
        'S-950': '950px',
        'S-550': '550px',
        'S-450': '450px',
        'S-330': '330px',
      },
      zIndex: {
        75: '75',
        100: '100',
        150: '150',
        200: '200',
        250: '250',
        500: '500',
        1000: '1000',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(73deg)' },
          '40%': { transform: 'rotate(146deg)' },
          '60%': { transform: 'rotate(210deg)' },
          '80%': { transform: 'rotate(295deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shake: {
          '0%': { transform: 'translate3d(0, 0, 0) rotateY(180deg)' },
          '50%': { transform: 'translate3d(0, 0, -100px) rotateY(90deg)' },
          '100%': { transform: 'translate3d(0, 0, 0) rotateY(180deg)' },
        },
      },
      animation: {
        'move-round': 'wave 16s linear infinite',
        'move-shake': 'shake 16s linear infinite',
      },
    },
  },
  plugins: [],
}

