var express = require('express');
var fs = require('fs');
var index = fs.readFileSync('index.html');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
