var port = process.env.PORT;
var msg = process.env.MESSAGE || 'We are down for maintenance and will be back shortly. Sorry for any inconvenience.';

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(503, {'Content-Type': 'text/plain'});
  res.end(msg);
}).listen(port, '0.0.0.0');
console.log('Maintenance server running at http://0.0.0.0:'+port+'/');
