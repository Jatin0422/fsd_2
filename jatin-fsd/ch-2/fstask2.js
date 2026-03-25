fs = require('fs')
var a = [{
    "Name": "Jatin",
    "Age": 19
},
{
    "Name": "abc",
    "Age": 20
}
]
fs.writeFileSync('b.txt', JSON.stringify(a))
var data = fs.readFileSync('b.txt', 'utf-8')
console.log(data)