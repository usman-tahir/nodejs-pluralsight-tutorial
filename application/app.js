
console.log('process.env.PORT: ' + process.env.PORT);
var express = require('express'),
  app = express(),
  handlebars = require('express-handlebars'),
  bookRoute = express.Router(),
  port = process.env.PORT || 5000,
  books = [
    {
      title: 'Harry Potter and the Sorceror\'s Stone',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
    {
      title: 'Harry Potter and the Half-Blood Prince',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      genre: 'Non-fiction',
      author: 'J.K. Rowling',
      read: false
    },
  ];

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

bookRoute.route('/')
  .get(function(request, response) {
    response.render('books', {title: 'Books', navigation: [
      {Link: '/Books', Text: 'Books'},
      {Link: '/Authors', Text: 'Authors'}
    ],
    books: books
    });
  });

bookRoute.route('/single')
  .get(function(request, response) {
    response.send('Single book');
  });
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