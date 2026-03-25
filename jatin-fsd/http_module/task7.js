http = require('http')
url = require('url')
fs = require('fs')
addr = "https://localhost:5002/login"
q = url.parse(addr)
n = q.pathname.split('/').pop()
console.log(n)
http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        d = fs.readFileSync('task7home.html', 'utf-8')
        res.end(d)
    }
    else if (req.url == '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        f = fs.readFileSync(n + ".html", 'utf-8')
        res.end(f)
    }
    else if (req.url == '/gallery') {
        res.writeHead(200, { 'Content-Type': 'image/png' })
        i = fs.readFileSync('logo.png')
        res.end(i)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'image/png' })
        res.write("Page not found")
    }
}).listen(5002)
