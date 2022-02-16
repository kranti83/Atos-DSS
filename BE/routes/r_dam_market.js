var express = require('express');
var r_dam_market = express.Router();

/* GET users listing. */
r_dam_market.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('dam_market.ejs', { _blank: '_blank' });
});

module.exports = r_dam_market;