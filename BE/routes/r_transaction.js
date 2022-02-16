var express = require('express');
var r_transaction = express.Router();

/* GET users listing. */
r_transaction.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('transaction.ejs', { _blank: '_blank' });
});

module.exports = r_transaction;