// http = require('http')
// http.createServer(serverListener).listen()
fs = require('fs')
const http = require('http')
let server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('hello')
        res.end()
    }
    else if (req.url === "/b.html") {
        data = fs.readFileSync("b.html")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Page not  found')
    }

}).listen(6001)