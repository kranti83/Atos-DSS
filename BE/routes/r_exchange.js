var express = require('express');
var r_exchange = express.Router();

/* GET users listing. */
r_exchange.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('exchange.ejs', { _blank: '_blank' });
});

module.exports = r_exchange;