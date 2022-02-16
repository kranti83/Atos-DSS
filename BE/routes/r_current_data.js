// caching should be implemented here, going forward
var express = require('express');
var r_current_data = express.Router();
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

console.log("=========================" + __filename);

/* GET users listing. */
r_current_data.get('/market_news', function(req, res, next) {
    db.query(queries.ex_market_news, function(err, result, fields) {
        if (err) res.send("Error: Executing query: " + queries.ex_market_news);
        else res.send(result);
    })
});

/* GET users listing. */
r_current_data.get('/market_indices', function(req, res, next) {
    db.query(queries.ex_daily_values, function(err, result, fields) {
        if (err) res.send("Error: Executing query: " + queries.ex_daily_values);
        else res.send(result);
    })
});

module.exports = r_current_data;