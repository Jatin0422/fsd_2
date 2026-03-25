var EventEmitter = require('events')
var ee = new EventEmitter()
c = function () {
    console.log('connection done sucessfulyy')
    console.log("Thanks")
}
d = function () {
    console.log('data received sucessfulyy')
    console.log("Thanks")
}
ee.on('connection', c)
ee.on('data-received', d)
ee.emit('connection')
ee.emit('data-received')