const fs = require("fs");
const http = require("http");

const file = fs.readFileSync("../HTML_CSS_Javascript_&_Basic_Projects/tables.html");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(file)
    console.log('Listening on port 80');
})

server.listen(8080, '127.0.0.1')