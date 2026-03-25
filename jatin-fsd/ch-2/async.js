fs = require('fs')
fs.writeFile('Lec1.txt', 'Json', (err) => {
    if (err) throw err 
    console.log('write operation done')

fs.appendFile('lec1.txt', 'WE are student of sem of cse branch', (err) =>{
    if (err) throw err
    console.log('Append done')

fs.readFile('lec1.txt', 'utf-8', (err, data) => {
    if (err) throw err 
    console.log(data)
})
})
})
console.log("process end")