var express = require('express');
var r_short_transaction = express.Router();

/* GET users listing. */
r_short_transaction.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('short_transaction.ejs', { _blank: '_blank' });
});

module.exports = r_short_transaction;