var express = require('express');
var r_logistic = express.Router();

/* GET users listing. */
r_logistic.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('logistic.ejs', { _blank: '_blank' });
});

module.exports = r_logistic;