var WebSocket = require('ws');

var WebSoketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSoketServer({
  port: port
});

console.log('websockets server started');

ws.on('connection', function (socket) {
  console.log('client connection established');

  socket.on('message', function (data) {
    console.log('message received:'+data);
    socket.send(data);
  });

});
