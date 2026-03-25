const http = require('http')
let server = http.createServer((req, res) => {
    setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'application/json' })    
        res.write('MAJAma')
        res.end()
    },10000)
    
}).listen(6006)