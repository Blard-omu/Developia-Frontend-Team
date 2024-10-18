/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsla(213, 100%, 36%, 1)',
        'primary-50': 'hsla(207, 94%, 88%, 1)',
        'primary-100': 'hsl(214, 96%, 36%)',
        'primary-200': 'hsl(208, 62%, 26%)',
        'primary-300': 'hsla(207, 96%, 18%, 1)',
        'primary-400': 'hsla(207, 53%, 50%, 1)',
        'dark': 'hsl(0, 0%, 0%)',
        'secondary-100': 'hsl(252, 11%, 91%)',
        'secondary-200': 'hsl(0, 0%, 60%)',
        'secondary-300': 'hsla(0, 0%, 30%, 1)',
        'greeny-200': 'hsl(147, 91%, 31%)',
        'teal-100': 'hsl(212, 79%, 96%)',
        'neutral-blue-200': 'hsl(244, 27%, 90%)',
        'neutral-grey-50': 'hsla(0, 11%, 89%, 1)',
        'neutral-grey-100': 'hsla(0, 0%, 97%, 1)',
        'neutral-black': 'hsla(0, 0%, 17%, 1)',
        'white': 'hsla(0, 0%, 100%, 1)',
        'off-white': 'hsl(60, 100%, 100%)',
        'red': 'hsl(351, 46%, 38%)',
        'tomato': 'hsl(28, 81%, 73%)',
        'transparents': 'hsla(0, 0%, 0%, 0)',
        'magenta-blue-100': 'hsl(244, 27%, 90%)',
        'magenta-blue-200': 'hsl(232, 10%, 71%)',
        'light-blue-100': 'hsla(224, 71%, 84%, 1)',
        'light-blue-200': 'hsla(207, 94%, 88%, 1)',
        'grey-200': 'hsla(0, 11%, 89%, 1)',
        'black-grey': 'hsla(0, 0%, 30%, 1)',
        'grey-500': 'hsla(240, 11%, 91%, 1)',
        'black-100': 'hsla(207, 95%, 8%, 1)',
        'red-100': 'hsla(351, 100%, 35%, 1)',
        'grey-400': 'hsla(0, 0%, 59%, 1)',
        'grey-600': 'hsla(224, 45%, 22%, 1)',
        'blue-blue': 'hsla(207, 53%, 50%, 1)',
        'grey-700': 'hsla(0, 0%, 58%, 1)',
        'green-100': 'hsla(147, 88%, 30%, 1)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        k2d: ['K2D', 'sans-serif'],
        ibm: ['IBM+Plex+Sans', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulseBg: {
          '0%, 100%': { backgroundColor: '#E6F3FE' },
          '30%': { backgroundColor: 'hsl(244, 27%, 90%)' },
        },
      },
      animation: {
        pulseBg: 'pulseBg 5s infinite',  
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        custom: '-3px 0px 20px 0px rgba(0, 0, 0, 0.25)',
        'inner-custom': '-5px -11px 10.8px 0px #00000040 inset',
        customG: '1.61px 1.61px 8.03px 4.02px hsla(0, 0%, 0%, 0.1)',
      },
    },
  },
};