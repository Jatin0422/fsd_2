fs = require('fs')
http = require('http')
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('file reading')
    }
    else if (req.url === "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        data1 = fs.readFileSync('home.html')
        res.end(data1)
    }
    else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        data2 = fs.readFileSync('home.html')
        res.end(data2)
    }
         else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Page not  found')
        }
    }
).listen(6001)
