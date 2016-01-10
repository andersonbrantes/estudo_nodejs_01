
var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.write('Hello, this is novoUsuario');
  response.end();

//  fs.readFile('index.html', function(err, contents) {
//    response.write(contents);
//    response.end();
//  });
});

server.on('request', function(){
  console.log('New request coming in...');
});

server.on('close', function(){
  console.log('Closing down the server...');
});

server.listen(8080);

