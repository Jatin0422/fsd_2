// http = require('http')
// http.createServer(serverListener).listen()
fs=require('fs')
const http = require('http')
let server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello</h1><img src="logo.png">')
        res.end()
    }
    else if (req.url === "/logo.png") {
        data = fs.readFileSync("logo.png")
        res.writeHead(200, { 'Content-Type': 'image/png' })
        res.end(data)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Page not  found')
    }
  
}).listen(3002)