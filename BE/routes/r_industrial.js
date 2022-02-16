var express = require('express');
var r_industrial = express.Router();

/* GET users listing. */
r_industrial.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('industrial.ejs', { _blank: '_blank' });
});

module.exports = r_industrial;