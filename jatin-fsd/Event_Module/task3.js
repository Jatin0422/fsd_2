fs = require('fs')
var EventEmitter = require('events')
var ee = new EventEmitter()

ee.on('create', () => {
    fs.writeFile('new.txt', 'This is data', () => {
        console.log('write done')
        ee.emit('update')
    })
})
ee.on('update', () => {
    fs.appendFile('new.txt', 'That is data', () => {
        console.log('update done')
        ee.emit('read')
    })
})
ee.on('read', () => {
    fs.readFile('new.txt', 'utf-8', (err, data) => {
        if (err) throw new err
        console.log(data)
        ee.emit('finished')
    })
})
ee.on('finished', () => {
    console.log('finished')
})
ee.emit('create')