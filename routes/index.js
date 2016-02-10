var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote.js');

router.get('/', function(req, res) {



Quote.find({}, function(err, quotes) {
    if (err) {
      throw err;
    };

    console.log(err);

    res.render('index', { quotes: quotes, title: "Tweet Smart" });//res render//



}); //quote.find//

}); //router.get//















module.exports = router;






