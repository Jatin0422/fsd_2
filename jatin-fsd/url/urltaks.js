var u = require('url')
let addr = 'http://localhost:8000/defualt.html?year=2026&month=March#warupdate'
process.noDeprecation = true
var q = u.parse(addr, true)
let data = q.query
console.log(data)
console.log(data.year)
console.log(q)
console.log(q.port)
console.log(q.query)
console.log(q.search)
if ((data.year % 4 == 0 && data.year % 100 != 0) || (data.year % 400 == 0)) {
    console.log(`${data.year} is a leap year`)
}
else {
    console.log('not a leap year')
}