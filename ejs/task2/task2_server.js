expr = require('express')
app = expr()
app.use(expr.urlencoded())
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('contact')
})
app.post('/submit', (req, res) => {
    fname = req.body.fname
    email = req.body.email
    res.render('out', { fname, email })
})
app.listen(5556)