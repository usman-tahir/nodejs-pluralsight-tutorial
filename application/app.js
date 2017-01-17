
console.log('process.env.PORT: ' + process.env.PORT);
var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function (request, response) {
  response.send('Hello, World!');
});

app.get('/books', function (request, response) {
  response.send('Hello, Books!');
});

app.listen(port, function (error) {
  console.log('Running server on port ' + port);
});