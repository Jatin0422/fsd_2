var expr = require('express')
var app = expr()
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.write(`<h1>helloww</h1>`)
    res.send()
})
app.listen(5006,'0.0.0.0',() => {
    console.log('Server connected')
})