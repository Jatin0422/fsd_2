expr = require('express')
app = expr()
app.use(expr.static("../public", { index: 'task4.html' }))
app.use(expr.urlencoded({ extended: true }))
app.post("/process-post", (req, res) => {
    uname = req.body.firstname
    res.write(`<h1 style="color:red;">${uname}</h1>`)
    res.write(`<h1 style="color:green;">${req.body.password}</h1>`)
    res.write(`<h1>${req.body.r1}</h1>`)
    res.send()
})
app.listen(5789)