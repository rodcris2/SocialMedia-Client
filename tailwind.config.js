module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '404': "url('/src/images/egg.png')"
      },
      animation: {
        'progress': 'progressBar 1s infinite',
      },
      keyframes: {
        progressBar: {
          '0%' : { width: '0%' },
          '100%' : { width: '96%'},
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("tailwindcss-hyphens")
  ],
}
