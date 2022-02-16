var express = require('express');
var r_receipt = express.Router();

/* GET users listing. */
r_receipt.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('receipt.ejs', { _blank: '_blank' });
});

module.exports = r_receipt;