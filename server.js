'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/dist'));

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

//var port = process.env.PORT || 3000;

// server.listen(port, function () {
//   console.log('Server has started on port ' + process.env.PORT);  
// });

server.listen(app.get('port'), function() {
  console.log('Server has started on port ' + app.get('port'));
});