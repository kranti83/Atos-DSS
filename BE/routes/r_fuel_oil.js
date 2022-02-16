var express = require('express');
var r_fuel_oil = express.Router();

/* GET users listing. */
r_fuel_oil.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('fuel_oil.ejs', { _blank: '_blank' });
});

module.exports = r_fuel_oil;