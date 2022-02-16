var express = require('express');
var r_misc = express.Router();

/* GET users listing. */
r_misc.get('/login', function(req, res, next) {
  //res.render('login.ejs');
});

module.exports = r_misc;
