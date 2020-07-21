var express = require('express')
  , bodyParser = require('body-parser');

var app = express();
const clipboardy = require('clipboardy');

app.use(bodyParser.json());

app.post('/copy-text', function(request, response){
    var body = request.body;
    console.log('\x1b[32m%s\x1b[0m', "Copy Text: " + body.text);
    clipboardy.writeSync(body.text);
    clipboardy.readSync();
});

app.listen(8080);

console.log('\x1b[32m%s\x1b[0m', "Server Started!!");