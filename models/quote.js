var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({

  body: { type: String, required: true},
  author: { type: String, required: true }

});

var Quote = mongoose.model('Quote', quoteSchema);

// Make this available to our other files
module.exports = Quote;
