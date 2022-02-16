var express = require('express');
var async = require('async');
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

// ==== main page
var r_main = express.Router();
r_main.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
    ObjPageMain = {};
    async.parallel([
            function doQuery1(callback) {
                db.query("SELECT * FROM ex_market_news", function(err, result, fields) {
                    ObjPageMain.marketNews = result;
                    callback(null);
                })
            },
            function doQuery2(callback) {
                db.query("SELECT * FROM ex_daily_values", function(err, result, fields) {
                    ObjPageMain.marketIndices = result;
                    callback(null);
                })
            },
            /*function doQuery3(callback) {
                db.query(queries.g_id1_avg_yearly_congestion, function(err, result, fields) {
                    ObjPageMain.g_ZoneCongestionAvgYearly = result;
                    callback(null);
                })
            }*/
        ], function done() {
            ObjPageMain.page = "index_center.ejs"; //set which page to display
            res.render('index.ejs', { ObjPageMain: ObjPageMain });
        } //====done() 
    ); //====async.parallel()
});

module.exports = r_main;