
console.log('process.env.PORT: ' + process.env.PORT);
var express = require('express'),
  app = express(),
  handlebars = require('express-handlebars'),
  port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (request, response) {
  var sampleList = ['a', 'b', 'c'];
  response.render('index', {list: sampleList});
});

app.get('/books', function (request, response) {
  response.send('Hello, Books!');
});

app.listen(process.env.PORT || port, function (error) {
  console.log('Running server on port ' + port);
});