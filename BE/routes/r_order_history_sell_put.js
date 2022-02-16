var express = require('express');
var r_order_history_sell_put = express.Router();

/* GET users listing. */
r_order_history_sell_put.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('order_history_sell_put.ejs', { _blank: '_blank' });
});

module.exports = r_order_history_sell_put;