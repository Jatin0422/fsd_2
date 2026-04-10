var expr = require('express')
var app = expr()
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('How is u')
})
app.get('/about', (req, res) => {
    res.send('About Page')
})
app.listen(5678, () => {
    console.log('this is it')
})