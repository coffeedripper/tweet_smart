var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote.js');

router.get('/', function(req, res) {

    Quote.findOne({}, function(err, quote) {
        if (err) {
            throw err;
            console.log(err);
        };


        res.render('index', {
            quote: quote,
            title: "Shorty Quote!"
        }); //res end//
    }); //quote.find//
}); //router.get//















module.exports = router;
