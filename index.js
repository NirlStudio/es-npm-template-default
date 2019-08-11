'use strict'

var path = require('path')
var espresso = require('eslang')

// create the void.
var $void = espresso()
require('./profile')($void)

// prepare the path of app home directory.
var appHome = path.join(__dirname, 'es')

if (require.main === module) {
  // running as an app.
  var args = global.process.argv.slice(2) || []
  module.exports = $void.$run('app', args, appHome)
} else {
  // running as a module (exposing Espresso module to JS code)
  var being = $void.createBootstrapSpace(path.join(appHome, '@'))
  module.exports = being.$import('./module')
}
