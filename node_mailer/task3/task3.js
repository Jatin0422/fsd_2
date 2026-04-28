expr = require('express')
nm = require('nodemailer')
app = expr()
app.use(expr.static('./', { index: 'form.html' }))
app.use(expr.urlencoded({extended:true}))

app.post('/response', (req, res) => {
    res.write('Thank you for your response')
    uname = req.body.uname
    email = req.body.em
    trans = nm.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'jatinsadhnani2204@gmail.com',
            pass: ""
        }
    })
    mailoption = {
        from: "jatinsadhnani2204@gmail.com",
        to: email,
        subject: 'subject of email',
        text: 'hello user',
        html: '<b> Html</b>'
    }
    trans.sendMail(mailoption, (err, info) => {
        if (err) {
            res.write(err)
        }
        else {
            res.write(info)
        }
    })
    res.send()
})
app.listen(5252)