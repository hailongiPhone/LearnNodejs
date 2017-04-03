var http = require('http');
var fs = require('fs');
// var path = require('path');
var extract = require('./extractFilePath.js')
var wss = require('./websockets-server.js');

var handleError = function (err, res) {
  res.writeHead(404);
  res.end();
}

var server = http.createServer(function (req, res) {
  var filePath = extract(req.url);

  fs.readFile('app/pdf.pdf', function(err, data){
    if (err) {
      handleError(err,res);
      res.end();
    }else{
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=some_file.pdf',
        'Content-Length': data.length
      });
      res.end(data);
    }

  })
});


server.listen(3000);
