
console.log('process.env.PORT: ' + process.env.PORT);
var express = require('express'),
  app = express(),
  handlebars = require('express-handlebars'),
  bookRoute = require('./src/routes/bookRoutes'),
  port = process.env.PORT || 5000;
  
app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRoute);

app.get('/', function (request, response) {
  var routes = [
    {Link: '/Books', Text: 'Books'},
    {Link: '/Authors', Text: 'Authors'}
  ];
  response.render('index', {navigation: routes});
});

app.listen(process.env.PORT || port, function (error) {
  console.log('Running server on port ' + port);
});