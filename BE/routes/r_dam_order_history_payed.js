var express = require('express');
var r_dam_order_history_payed = express.Router();

/* GET users listing. */
r_dam_order_history_payed.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('dam_order_history_payed.ejs', { _blank: '_blank' });
});

module.exports = r_dam_order_history_payed;