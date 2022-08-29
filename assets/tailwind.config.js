// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './js/**/*.js',
    '../lib/*_web.ex',
    '../lib/*_web/**/*.*ex'
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#2B2C35',
        'orange': {
          'light': '#FE6D34',
          'dark': '#FE5434',
        },
        'blue': {
          'light': '#39A6FF',
          'dark': '#2078DE',
        },
        'yellow': {
          'light': '#FFED54',
          'dark': '#F3B840',
        },
        'green': {
          'light': '#67FFA2',
          'dark': '#67DF91',
        },
        'purple': {
          'light': '#9F0BFF',
          'dark': '#C961FD',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({addVariant}) => addVariant('phx-no-feedback', ['&.phx-no-feedback', '.phx-no-feedback &'])),
    plugin(({addVariant}) => addVariant('phx-click-loading', ['&.phx-click-loading', '.phx-click-loading &'])),
    plugin(({addVariant}) => addVariant('phx-submit-loading', ['&.phx-submit-loading', '.phx-submit-loading &'])),
    plugin(({addVariant}) => addVariant('phx-change-loading', ['&.phx-change-loading', '.phx-change-loading &']))
  ]
}
