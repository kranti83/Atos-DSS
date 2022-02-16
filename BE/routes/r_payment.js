var express = require('express');
var r_payment = express.Router();

/* GET users listing. */
r_payment.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('payment.ejs', { _blank: '_blank' });
});

module.exports = r_payment;