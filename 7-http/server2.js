const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream('./index.html', 'utf8').pipe(res);
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream('./about.html', 'utf8').pipe(res);
  }
});

server.listen(3000);