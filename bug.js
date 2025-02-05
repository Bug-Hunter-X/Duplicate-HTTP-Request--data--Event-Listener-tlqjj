const http = require('http');

const server = http.createServer((req, res) => {
  // Error: req.on('data') is called multiple times
  req.on('data', chunk => {
    console.log('Received chunk:', chunk.toString());
  });
  req.on('data', chunk => {
    console.log('Received chunk:', chunk.toString());
  });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});