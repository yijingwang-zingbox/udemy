var express = require('express');
var app = express();
var path = require('path');


app.set('port', 3000);

app.get('/', function(req, res){
  console.log('Get the homepage');
  res.send('Express yourself');
})

app.get('/json', function(req, res){
  console.log('Get the homepage');
  res
  .status('200')
  .json({'Express yourself': true} );
})

app.get('/file', function(req, res){
  console.log('Get the homepage');
  res
  .status('200')
  .sendFile(path.join(__dirname, 'app.js'));
})

var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('Listen on port '+port);
});
