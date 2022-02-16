var express = require('express');
var r_domestic = express.Router();

/* GET users listing. */
r_domestic.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('domestic.ejs', { _blank: '_blank' });
});

module.exports = r_domestic;