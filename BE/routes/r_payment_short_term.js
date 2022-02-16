var express = require('express');
var r_payment_short_term = express.Router();

/* GET users listing. */
r_payment_short_term.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('payment_short_term.ejs', { _blank: '_blank' });
});

module.exports = r_payment_short_term;