// caching should be implemented here, going forward
var express = require('express');
var r_graphs = express.Router();
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

console.log("=========================" + __filename);

/* GET users listing. */
r_graphs.get('/graph1', function(req, res, next) {
    db.query(queries.g_id1_avg_yearly_congestion, function(err, result, fields) {
        if (err) res.send("Error: Executing query: " + queries.g_id1_avg_yearly_congestion);
        else res.send(result);
    })
});

r_graphs.get('/graph2', function(req, res, next) {
    db.query(queries.g_id2_daily_elspot_price, function(err, result, fields) {
        if (err) {
            res.send("Error: Executing query: " + queries.g_id2_daily_elspot_price);
            console.log('ERR: ' + err);
        } else res.send(result);
    })
});

r_graphs.get('/graph3', function(req, res, next) {
    db.query(queries.g_id3_hourly_euro_index, function(err, result, fields) {
        if (err) res.send("Error: Executing query: " + queries.g_id3_hourly_euro_index);
        else res.send(result);
    })
});

r_graphs.get('/graph4', function(req, res, next) {
    db.query(queries.g_id4_avg_monthly_price_swe, function(err, result, fields) {
        if (err) res.send("Error: Executing query: " + queries.g_id4_avg_monthly_price_swe);
        else res.send(result);
    })
});

r_graphs.get('/graph5', function(req, res, next) {
    db.query(queries.g_id5_hourly_price_gb, function(err, result, fields) {
        if (err) res.send("Error: Executing query: " + queries.g_id5_hourly_price_gb);
        else res.send(result);
    })
});

module.exports = r_graphs;