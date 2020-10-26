/*
File name: index.js
Author's name: Aakriti Gupta
Student ID: 301103413
Date: October 26, 2020
Web site name: Favourite BookList Midterm
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
