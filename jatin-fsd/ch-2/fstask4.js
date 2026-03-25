fs = require('fs')
const shape = [{ name: "circle", diameter: 8 }, { name: "square", side: 10 }]
fs.writeFileSync('shape.txt', JSON.stringify(shape))
a = fs.readFileSync('shape.txt', 'utf-8')
data = JSON.parse(a)
sp = data[1].side * 4
cp = data[0].diameter * 3.14
console.log(sp, cp)
fs.appendFileSync('shape.txt', 'Perimeter of square' + sp + "and circle is" + cp)