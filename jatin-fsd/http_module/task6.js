http = require('http')
url = require('url')
http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html lang="en">
    
    <body>
        <nav>
          
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
        </nav>
    </body>
</html>`)
        res.write("Home page chhe")
        res.end()
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html lang="en">
    
    <body>
        <nav>
          
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
        </nav>
    </body>
</html>`)
        res.write("About page it is")
        res.end()
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html lang="en">
    
    <body>
        <nav>
          
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
        </nav>
    </body>
</html>`)
        res.write('Contact page its')
        res.end()
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("PAge not found")
        res.end()
    }
}).listen(6001)