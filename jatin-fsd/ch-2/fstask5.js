var a = { data: { a: 15, b: 20, c: [40, 30] } }
fs = require('fs')
fs.writeFileSync('task5.txt', JSON.stringify(a))
b = fs.readFileSync('task5.txt', 'utf-8')
c = JSON.parse(b)
add = c.data.a + c.data.b
console.log(add)
sub = c.data.c[1] - c.data.b
console.log(sub)
mul = c.data.c[0] * c.data.c[1]
console.log(mul)
fs.appendFileSync('task5.txt', "\n addition: " + add + "\n subtraction: " + sub + "\n multiplication: " + mul)