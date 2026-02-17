/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*html",
    "../src/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1180px',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['Times New Roman', 'ui-serif'],
      'poppins-extra-light': ['Poppins ExtraLight', 'sans-serif'],
      'poppins-light': ['Poppins Light', 'sans-serif'],
      'poppins-regular': ['Poppins Regular', 'sans-serif'],
      'poppins-medium': ['Poppins Medium', 'sans-serif'],
      'poppins-bold': ['Poppins Bold', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primaryGreen: '#1F7A3E',
        darkGreen: '#166534',
        goldYellow: '#F2C300',
        brickBrown: '#8B5A2B',
      },
    },
  },
  plugins: [],
}


