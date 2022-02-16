var express = require('express');
var r_trader1 = express.Router();

/* GET users listing. */
r_trader1.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('trader1.ejs', { _blank: '_blank' });
});

module.exports = r_trader1;