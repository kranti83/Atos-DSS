var express = require('express');
var r_order_history = express.Router();

/* GET users listing. */
r_order_history.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('order_history.ejs', { _blank: '_blank' });
});

module.exports = r_order_history;