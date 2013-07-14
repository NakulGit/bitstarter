var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var buf =  fs.readFileSync('index.html','utf8');
var strcontent = buf.toString('utf8',0);
response.send(strcontent);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
