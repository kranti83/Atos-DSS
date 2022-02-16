var express = require('express');
var r_trader2 = express.Router();

/* GET users listing. */
r_trader2.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('trader2.ejs', { _blank: '_blank' });
});

module.exports = r_trader2;