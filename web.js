var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    fs.readFileSync('/bitstarter/index.html','utf8' {
	//   if(err) {
	//	return console.log(err);
	//	}
  response.send('Hello World12345');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
