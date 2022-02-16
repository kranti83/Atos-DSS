var express = require('express');
var r_market_mix = express.Router();

/* GET users listing. */
r_market_mix.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('market_mix.ejs', { _blank: '_blank' });
});

module.exports = r_market_mix;