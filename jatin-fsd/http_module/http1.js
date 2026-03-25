// http = require('http')
// http.createServer(serverListener).listen()
const http = require('http')
let data = {  'name': 'Kohli', 'runs': 96 } 
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('hii')
    res.write('<h1>Hello server</h1>')
    res.end('how are u')
})
server.listen(6008, () => {
    console.log('server connect')
})