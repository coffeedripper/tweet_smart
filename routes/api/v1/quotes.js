var express = require('express');
var router = express.Router();
var Quote = require('../../../models/quote');

router.get('/', function(req, res) {

    Quote.find({}, function(err, quote) {
        if (err) {
            throw err;
            console.log(err);
        };
          console.log("quote log" + quote);
        res.send(quote);



        // }); //res end//
    }); //quote.find//
}); //router.get//



// "Create" action to create a new quote
router.post('/', function(req, res) {
    console.log("quote body" + req.body.body);
    var quote = new Quote({

        body: req.body.body,
        author: req.body.author
        // author: "mac"

    });

    quote.save(function(err, quote) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(quote);
    });
});

module.exports = router;
