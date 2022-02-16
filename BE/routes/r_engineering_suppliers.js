var express = require('express');
var r_engineering_suppliers = express.Router();

/* GET users listing. */
r_engineering_suppliers.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    res.render('engineering_suppliers.ejs', { _blank: '_blank' });
});

module.exports = r_engineering_suppliers;