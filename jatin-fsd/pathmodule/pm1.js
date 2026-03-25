path = require('path')
// path.basename()
// path.extname()
// path.dirname()
// path.parse()
var a = path.basename("D:/JATIN-FSD/pathmodule/h.txt")
console.log(a)
var b = path.extname("D:/JATIN-FSD/pathmodule/h.txt")
console.log(b)
var c = path.dirname("D:/JATIN-FSD/pathmodule/h.txt")
console.log(c)
d = path.parse("D:/JATIN-FSD/pathmodule/h.txt")
console.log(d)
if (d.ext == '.txt') {
    console.log("File is text based")
}
else {
    console.log("File is not text based")
}