var expr = require('express')
app = expr()
app.get("/name/:name/age/:age", (req, res) => {
    res.send(req.params)
})
app.listen(1234)