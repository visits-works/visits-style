
         'use strict'

      if (process.env.NODE_ENV === 'production') {
        module.exports = require('./visits-style.cjs.production.js')
      } else {
        module.exports = require('./visits-style.cjs.development.js')
      }