var EventEmitter = require('events')
var ee = new EventEmitter()
ee.on('calc', function cal(a) {
    var total = 0
    for (i in a) {
        total += a[i]
    }
    console.log(total)
    ee.emit('per', total)
})
ee.on('per', (p)=> {
    percentage = p * 100 / 125
    console.log(percentage)
})
ee.emit('calc', [15, 20, 25, 19, 20])
//fs.existSync('Folder name') checks whether a folder exists or not