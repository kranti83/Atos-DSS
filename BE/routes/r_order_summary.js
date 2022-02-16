var express = require('express');
var r_order_summary = express.Router();

/* GET users listing. */
r_order_summary.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('order_summary.ejs', { _blank: '_blank' });
});

module.exports = r_order_summary;