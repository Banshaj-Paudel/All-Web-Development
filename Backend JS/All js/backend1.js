// console.log("Wassup Bhairu?");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello Amazing Hacker');
    res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <div class="clock">
        <div id="day">
            Sunday
        </div>
        <div id="time" style=font-family:Sacramento, cursive;>
            12:00AM
        </div>
        <div id="greets">
            Good Morning, Bhairu!
        </div>
    </div>

    <script src="code.js"></script>
</body>

</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});