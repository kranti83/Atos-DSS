var express = require('express');
var r_options_sell_put = express.Router();
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

/* GET users listing. */
r_options_sell_put.get('/', function(req, res, next) {
    console.log("=========================" + __filename);

     db.query(queries.t_holdings, function(err, result, fields) {
        if (err) console.log("Error: Executing query: " + queries.t_holdings);
        console.log(result);    
        res.render('options_sell_put.ejs', {holdings : result });
     })
});

module.exports = r_options_sell_put;