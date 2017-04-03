var WebSocket = require('ws');

var WebSoketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSoketServer({
  port: port
});

// 简单的聊天历史记录
var messages = [];

console.log('websockets server started');

ws.on('connection', function (socket) {
  console.log('client connection established');

  // 发送历史聊天信息
  messages.forEach(function (msg){
    socket.send(msg);
  });

  socket.on('message', function (data) {
    console.log('message received:'+data);
    messages.push(data);

    //聊天室广播
    ws.clients.forEach(function (clientSocket){
      if (clientSocket != socket){
        clientSocket.send(data);
      }
    });
  });

});
