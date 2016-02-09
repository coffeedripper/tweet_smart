var express = require('express');
var router = express.Router();

/*mongoose start*/
var mongoose = require('mongoose');
module.exports = mongoose.model('User', {
    username: String,
    password: String,
    email: String,
    gender: String,
    address: String
}); /*mongoose end*/





/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
