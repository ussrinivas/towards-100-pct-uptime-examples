var http = require('http'),
    path = require('path');

var PORT = process.env.PORT || 1025;

http.createServer(function (request, response) {
    var f = function() {
        throw new Error("uh-oh");
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(path.basename(__filename) + ': Hello World\n');
    };
    setTimeout(f, 1000);
}).listen(PORT);

console.log('Server running at http://127.0.0.1:' + PORT + '/');
