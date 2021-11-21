module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ['Poppins']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      'petmatch': {
        'primary' : '#242E47',
        
        'secondary' : '#D16D79',
        
        'accent': '#A9c3B8',
        'accent-focus': '#1BBCB6'
      }
    }]
  }
}
