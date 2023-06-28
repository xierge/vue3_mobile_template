const path = require('path')

module.exports = ({ file }) => {
    console.log(file)
  return {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 375,
        unitPrecision: 6,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines', /^@media/],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      },
    }
  }
}



