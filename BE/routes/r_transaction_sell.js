var express = require('express');
var r_transaction_sell = express.Router();

/* GET users listing. */
r_transaction_sell.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('transaction_sell.ejs', { _blank: '_blank' });
});

module.exports = r_transaction_sell;