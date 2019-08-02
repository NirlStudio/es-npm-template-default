var os = require('os')
var path = require('path')
var assert = require('assert')

describe('es/module', function () {
  var esModule = require('../index.js')

  describe('os-platform', function () {
    var platform = os.platform()
    it('(module os-platform) is ' + platform, function () {
      assert.strict.equal(esModule['os-platform'], platform)
    })
  })

  describe('path-resolve', function () {
    var appPath = path.resolve(__dirname, '../es', 'app.s')
    it('(module resolve-path "app.s") returns ' + appPath, function () {
      assert.strict.equal(esModule['resolve-path']('app.s'), appPath)
    })
  })

  describe('say-hello-to', function () {
    it('(module say-hello-to) returns "Hello, World"', function () {
      var message = esModule['say-hello-to']()
      assert.strict.equal(message, 'Hello, World')
    })

    it('(module say-hello-to "Mocha") returns "Hello, Mocha"', function () {
      var message = esModule['say-hello-to']('Mocha')
      assert.strict.equal(message, 'Hello, Mocha')
    })
  })
})
