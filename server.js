'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/dist'));

var server = http.createServer(app);

server.listen(process.env.PORT, function () {
  console.log('Server has started on port ' + process.env.PORT);  
});
