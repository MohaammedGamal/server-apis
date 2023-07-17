const express = require('express');
const bodyParser = require('body-parser')
const os = require("os")

const app = express();

app.get('/', function(req, res){
   res.write(`<h1>Hello world!</h1> \n`);
   res.write(`I am machine ${os.hostname}`);
   res.send();
});

app.listen(3000);