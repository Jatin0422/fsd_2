expr = rquire('express')
nm = require('nodemailer')
app = expr()
var trans=nm.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'jatinsadhnani2204@gmail.com',
        pass:"" 
    }
})
var mailoption = {
    from: "sender email",
    to: 'Receiver Email',
    subject: 'subject of email',
    text: 'hello user',
    html:'<b> Html</b>'
}
trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(info)
    }
})