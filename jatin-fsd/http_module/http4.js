// http = require('http')
// http.createServer(serverListener).listen()
fs=require('fs')
const http = require('http')
let server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Hello server</h1>')
        res.end()
    }
    else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Page not  found')
    }
  
})
server.listen(6008, () => {
    console.log('server connect')
})