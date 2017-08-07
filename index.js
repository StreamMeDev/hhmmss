'use strict'

module.exports = function (seconds) {
  var d = ifNanZero(Number(seconds))
  var h = ifNanZero(Math.floor(d / 3600))
  var m = ifNanZero(Math.floor(d % 3600 / 60))
  var s = ifNanZero(Math.floor(d % 3600 % 60))
  return padNumber(h) + ':' + padNumber(m) + ':' + padNumber(s)
}

function ifNanZero (v) {
  return isNaN(v) ? 0 : v
}

function padNumber (n) {
  return (n < 10 ? '0' : '') + n
}
