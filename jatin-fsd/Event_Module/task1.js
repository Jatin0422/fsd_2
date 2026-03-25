// make 4 function
var EventEmitter = require('events')
var ee = new EventEmitter()
// p =function(){console.log("photo function")}
c = function () { console.log("cateror function") }
d = function () { console.log("decorator function") }
w = function () { console.log("bride and groom function") }
ee.on('marriage', d)
ee.on('marriage', c)
ee.on('marriage', function photo() { console.log("photo function") })
ee.on('marriage', w)
ee.emit('marriage')
console.log('check my position')
console.log('thanks')