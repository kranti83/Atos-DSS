var express = require('express');
var r_option = express.Router();

/* GET users listing. */
r_option.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('option.ejs', { _blank: '_blank' });
});

module.exports = r_option;