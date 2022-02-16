var express = require('express');
var r_dam_order_summery = express.Router();

/* GET users listing. */
r_dam_order_summery.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('dam_order_summery.ejs', { _blank: '_blank' });
});

module.exports = r_dam_order_summery;