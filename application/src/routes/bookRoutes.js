
var express = require('express'),
  bookRoute = express.Router(),
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

bookRoute.route('/')
  .get(function(request, response) {
    response.render('bookListView', {title: 'Books', navigation: [
      {Link: '/Books', Text: 'Books'},
      {Link: '/Authors', Text: 'Authors'}
    ],
    books: books
    });
  });

bookRoute.route('/:id')
  .get(function(request, response) {
    var id = request.params.id;
    response.render('bookView', {title: 'Books', navigation: [
      {Link: '/Books', Text: 'Books'},
      {Link: '/Authors', Text: 'Authors'}
    ],
    book: books[id]
    });
  });

module.exports = bookRoute;