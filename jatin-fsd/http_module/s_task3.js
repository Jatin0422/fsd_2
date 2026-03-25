const buy = 100 * 70
const sell = 100 * 60
http = require('http')
http = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (sell > buy) {
        col = 'green'
    }
    else {
        col = 'red'
    }
    res.write(`<h1 style='color:${col}'>your profit is${sell - buy}</h1>`)
    res.end()
}).listen(6008)