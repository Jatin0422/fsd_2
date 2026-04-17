expr = require('express')
app = expr()
app.use(expr.static('../public', { index: 'sp_task1.html' }))
app.use(expr.urlencoded({ extended: true }))
app.post('/login',(req, res,next) => {
    res.write(`<h1>Welcome ${req.body.name}</h1>`)
    res.write(`<h1>Your email is:${req.body.email}</h1>`)
    next()
})
app.post('/login', (req, res, next) => {
    if (req.body.newsletter === "on") {
        res.write('Thank you for the subscription')
        res.write('<a href="/">Logout</a>')
    }
    else {
        res.write('You can subscribe to get daily updates')
        res.write('<a href="/subscription">subscription</a>')
    }
    next()
})
app.get('/subscription', (req, res) => {
    res.set("content-type", "text/html");
    res.write("<h3>Thank you for your subcsription</h3></center><a href='/'>Logout</a>");
    res.send()
})
app.listen(5897)