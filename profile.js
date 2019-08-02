'use strict'

var modules = require('eslang/lib/modules')

module.exports = function ($void) {
  // select some native modules to be exposed to Espresso code.
  modules.expose('os', 'path')
}
