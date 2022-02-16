var express = require('express');
var r_forecast = express.Router();

/* GET users listing. */
r_forecast.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('forecast.ejs', { _blank: '_blank' });
});

module.exports = r_forecast;