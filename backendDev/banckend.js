let http = require('http');
http.createServer((req, res) => {
  console.log(req.url)
}).listen(3100)