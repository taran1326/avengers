const http = require('http');
const server = http.createServer();
const fs = require('fs');

const port = 3000;

function requestHandler(req , res){

}
server.on('request', (req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync('./home.html'));
            break;
        case '/Avenger1':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync('./avenger1.html'));
            break;
        case '/Avenger2':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync('./avenger2.html'));
            break;
        case '/Avenger3':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync('./avenger3.html'));
            break;
        default:
            res.statusCode = 404;
            res.end('Page not found');
    }
});

module.exports = server

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
