/* global describe, it */
var assert = require('assert')
var hhmmss = require('../')

describe('hhmmss', function () {
  it('should return a string', function () {
    assert.equal(typeof hhmmss(123), 'string')
  })
  it('should return 00:00:00 for 0/null/undefined/nan seconds', function () {
    assert.equal(hhmmss(0), '00:00:00')
    assert.equal(hhmmss(), '00:00:00')
    assert.equal(hhmmss(null), '00:00:00')
    assert.equal(hhmmss('foo'), '00:00:00')
  })
  it('should return 00:00:16 for 16 seconds', function () {
    assert.equal(hhmmss(16), '00:00:16')
    assert.equal(hhmmss('16'), '00:00:16')
  })
  it('should return 00:04:16 for 256 seconds', function () {
    assert.equal(hhmmss(256), '00:04:16')
    assert.equal(hhmmss('256'), '00:04:16')
  })
  it('should return 01:04:16 for 3856 seconds', function () {
    assert.equal(hhmmss(3856), '01:04:16')
    assert.equal(hhmmss('3856'), '01:04:16')
  })
  it('should return 01:04:16 for 3856 seconds', function () {
    assert.equal(hhmmss(36256), '10:04:16')
    assert.equal(hhmmss('36256'), '10:04:16')
  })
})
