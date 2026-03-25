// http = require('http')
// http.createServer(serverListener).listen()
const http = require('http')
let data = { 'name': 'Kohli', 'runs': 96 }
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
}).listen(5006)