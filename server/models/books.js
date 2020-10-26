/*
File name: books.js
Author's name: Aakriti Gupta
Student ID: 301103413
Date: October 26, 2020
Web site name: Favourite BookList Midterm
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
