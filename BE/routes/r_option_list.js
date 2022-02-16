var express = require('express');
var r_option_list = express.Router();
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

/* GET users listing. */
r_option_list.get('/', function(req, res, next) {
    console.log("=========================" + __filename);
     db.query(queries.t_optionlist_1, [req.query.exchange, req.query.type],  function(err, result, fields) {
        if (err) {
            console.log("Error: Executing query: " + queries.t_optionlist_1 + "\n"+ err);
        }else{
            if(result.length == 0){ 
                res.status(400).send("No records found!");}
            else{
                res.render('option_list.ejs', { optionlist : result });
            }
            
        }
    })//query
});//get

module.exports = r_option_list;