var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);