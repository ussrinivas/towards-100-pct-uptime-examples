var path = require('path'),
    express = require ('express');

var app = express();

app.get('*', function(req, res){
    throw new Error("uh-oh");
    var body = path.basename(__filename) + ': Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
}).listen(1025);

console.log('Server running at http://127.0.0.1:1025/');
