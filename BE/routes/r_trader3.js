var express = require('express');
var r_trader3 = express.Router();

/* GET users listing. */
r_trader3.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('trader3.ejs', { _blank: '_blank' });
});

module.exports = r_trader3;