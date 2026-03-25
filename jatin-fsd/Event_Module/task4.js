var EventEmitter = require('events')
var ee = new EventEmitter()
ee.on('circle', function rad(r) {
    if (r < 0) {
        console.log('Radius” must be positive')
    }
    else {
        radii = 2 * 3.14 * r
        console.log(radii)
    }
})
ee.on('square', function sides(s) {
    if (s < 0) {
        console.log('Side must be positive')
    }
    else {
        peri = 4 * s
        console.log(peri)
    }
})
ee.emit('circle', 5)
ee.emit('square', 4)