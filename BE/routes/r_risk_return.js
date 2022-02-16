var express = require('express');
var r_risk_return = express.Router();

/* GET users listing. */
r_risk_return.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('risk_return.ejs', { _blank: '_blank' });
});

module.exports = r_risk_return;