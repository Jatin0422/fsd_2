const { url } = require('inspector')
var u = require('url')
let addr = 'https://localhost:8000/test?T1=25&T2=24&T3=25#ABC'
fs = require('fs')
// let data = new URL(addr, true)
// console.log(data.searchParams.get('name))
//console.log(data.searchParams.get('name'))

process.noDeprecation = true
var q = u.parse(addr, true)
let data = q.query
avgg= (parseInt(data.T1) + parseInt(data.T2) + parseInt(data.T3)) / 3
fs.writeFileSync('require.txt',`Average mark of student ${q.hash} is ${avgg}`)