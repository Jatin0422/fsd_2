var EventEmitter = require('events')
var ee = new EventEmitter()
ee.on("mrgFunction", () => {
    console.log('today is lagan')
})
ee.emit('mrgFunction')