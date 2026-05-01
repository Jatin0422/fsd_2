expr = require('express')
app = expr()
app.use(expr.urlencoded())
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('in')
})
app.post('/submit', (req, res) => {
    t1=parseInt(req.body.t1)
    t2=parseInt(req.body.t2)
    t3=parseInt(req.body.t3)
    t4 = parseInt(req.body.t4)
    total=t1+t2+t3+t4 
    res.render('out', { t1,t2,t3,t4,total })
})
app.listen(5558)