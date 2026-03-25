var EventEmitter = require('events')
var ee = new EventEmitter()
let l1 = function listener1() {
    console.log('im listener1')
}
let l2 = function listener1() {
    console.log('im listener2')
}
ee.addListener('conn', l1)
ee.on('conn', l2)
ee.emit('conn')
let d = ee.listenerCount('conn')
console.log(d)
//ee.emit('conn')
ee.removeListener('conn', l1)
var c = ee.listenerCount('conn')
console.log(d)
ee.emit('conn')