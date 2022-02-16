var express = require('express');
var r_sell_put_table = express.Router();
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

/* GET users listing. */
r_sell_put_table.get('/', function(req, res, next) {
    console.log("=========================" + __filename);

     db.query(queries.t_buyer_sellput, function(err, result, fields) {
        if (err) console.log("Error: Executing query: " + queries.t_buyer_sellput);
        console.log(result);    
        res.render('sell_put_table.ejs', { buyerSellPut: result });
     })    
});

module.exports = r_sell_put_table;