// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else 
    {
      res.render('books/index', {
        title: 'books229',
        books: books
        
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/details/add', (req, res, next) => {

  res.render('books/details' , {title: 'Add Book', book: ''})

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => 
{
      let newBook = book(
    {
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });

    book.create(newBook, (err, book) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books229');
        }
    });   
});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id

  book.findById(id, (err, editBook) =>
  {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
        res.render('books/details', {title: 'Edit Book', book: editBook})
    }
  })
  
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

  let id = req.params.id

  let updateBook = book({
    "_id": id,
    "title": req.body.title,
    "description": req.body.description,
    "price": req.body.price,
    "author": req.body.author,
    "genre": req.body.genre
  });

  book.updateOne({_id: id}, updateBook, (err) =>{
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      res.redirect('/books229');
    }
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/books229');
        }
    });
});


module.exports = router;
