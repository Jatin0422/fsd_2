expr = require('express')
app = expr()
app.use(expr.urlencoded())
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('in')
})
app.post('/result', (req, res) => {
    name = req.body.fname
    age = parseInt(req.body.age)
    skill = req.body.skill
    exp=req.body.exp 
    res.render('out', { name,age,skill,exp })
})
app.listen(5555)