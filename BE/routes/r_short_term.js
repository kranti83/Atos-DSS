var express = require('express');
var r_short_term = express.Router();

/* GET users listing. */
r_short_term.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('short_term.ejs', { _blank: '_blank' });
});

module.exports = r_short_term;