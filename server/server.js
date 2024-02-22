var http = require('http');

//create server

http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write("Apurva Kumar");
    res.end();
}).listen(2024);