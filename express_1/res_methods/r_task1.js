var expr = require('express')
var app = expr()
data = [{ name: 'Abc', age: 18 },{ name: 'Jatin', age: 20 } , { name: 'Diya', age: 19 }]

app.get("/", (req, res) => {
    res.json(data)
})
app.get('/sorted', (req, res) => {
    sorted = data.sort((a, b) => b.age - a.age)
    for (let i of sorted) {
        res.write("<h1>"+i.name+"="+i.age+ "</h1>")
    }
    res.send()

})
app.listen(5002, () => {
    console.log('done')
})