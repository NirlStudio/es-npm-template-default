'use strict'

module.exports = function ($void) {
  // select some native modules to be exposed to Espresso code.
  $void.require.expose('os', 'path')
}
