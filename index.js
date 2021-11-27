const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('I am Home');
    res.end()
  } else if(req.url === '/about') {
    res.write('This is about us pahe');
    res.end()
  } else {
    res.write('Page not found');
    res.end()
  }
});



server.listen(3000)

console.log('listening on port 3000');