var express = require('express');
var r_upd_orders_holdings = express.Router();
var db = require('../db/db-mysql'); // ==== connect to mysql
var queries = require('../db/queries'); // ==== connect to mysql

/* GET users listing. */
r_upd_orders_holdings.post('/', function (req, res, next) {
    console.log("=========================" + __filename);
    var userInput = req.body;
    var orderId = userInput.optId + "-" + new Date().getTime();
    var orderDateTime = new Date().toISOString();
    db.query(
        queries.ins_t_userorders,

        [orderId, orderDateTime, userInput.orderType, "complete", "dummy", userInput.sellerName,
            userInput.optId, userInput.itemType, userInput.orderQty, userInput.totalPrice, "0"],

        function (err, result, fields) {
            if (err) {
                console.log("Error: Executing query: " + queries.ins_t_userorders + "\n" + err);
                res.status(400).send("Technical Error!!");
            } else {
                var result = updateHoldings(userInput);
                console.log(result);
                res.send("Orders table updated");
            }//else
        }//callback fucntion
    )//query
});//get

function updateHoldings(userInput) {
    var returnCode = 0, returnMsg = '';
    //query to see if this itemID is present in userHoldings
    db.query(queries.sel_t_userholdings, ['dummy', userInput.optId], function (err, result, fields) {
        if (err) {
            console.log("Error: Executing query: " + queries.sel_t_userholdings + "\n" + err);
            this.returnCode = "-1"; this.returnMsg = "ERROR: Selecting from t_userholding";
        } else {
            if (result.length == 0) {//if not held, insert into holdings this itemID and other fields
                db.query(queries.ins_t_userholdings,
                    ['dummy', userInput.optId, userInput.itemType, userInput.orderQty, 
                    userInput.totalPrice, userInput.totalPrice / userInput.orderQty, 1],
                    function (err, result, fields) {
                        if (err) {
                            console.log("Error: Executing query: " + queries.ins_t_userholdings + "\n" + err);
                            this.returnCode = "-1"; this.returnMsg = "ERROR: inserting into t_userholdings";
                        } else {
                            console.log("Success: Executing query: " + queries.ins_t_userholdings);
                        }
                    }//callback - insert
                )//insert query
            } else { // if itemId already present in holdings
                _row = result[0];
                //first prepare an array that is to be updated
                var _fieldsForUpdate = [];
                //compute updated fields based on orderType (buy or sell)
                if (userInput.orderType == "buy") {//add the values
                    _fieldsForUpdate[0] = Number(_row.itemsHeld) + Number(userInput.orderQty);
                    _fieldsForUpdate[1] = Number(_row.itemsTotalInvestedAmt) + Number(userInput.totalPrice);
                    _fieldsForUpdate[2] = _fieldsForUpdate[1] / _fieldsForUpdate[0];
                    _fieldsForUpdate[3] = Number(_row.remarks) + 1;
                } else if (userInput.orderType == "sell") {//subtract the values?? NO
                    _fieldsForUpdate[0] = Number(_row.itemsHeld) - userInput.orderQty;
                    if (_fieldsForUpdate[0] ==0){ // if holding qty == 0
                        _fieldsForUpdate[1] = _fieldsForUpdate[1] = 0;
                    }else{
                        _fieldsForUpdate[1] = Number(_row.itemsTotalInvestedAmt) - (Number(_row.itemAvgInvestedAmt) * userInput.orderQty);
                        _fieldsForUpdate[2] = _fieldsForUpdate[1] / _fieldsForUpdate[0];
                    }
                    _fieldsForUpdate[3] = Number(_row.remarks) + 1;
                } else { }
                _fieldsForUpdate[4] = userInput.optId;
                console.log(userInput);
                console.log(_fieldsForUpdate);
                //execute query 
                db.query(queries.upd_t_userholdings,
                    _fieldsForUpdate,
                    function (err, result, fields) {
                        if (err) {
                            console.log("Error: Executing query: " + queries.upd_t_userholdings + "\n" + err);
                            returnCode = "-1"; returnMsg = "ERROR: updating t_userholdings";
                        } else {
                            console.log("Success: Executing query: " + queries.upd_t_userholdings);
                        }
                    }//callback - insert
                )//insert query
            }//else - if item present
        }//else
    }//callback - select
    )//query
    return {returnCode, returnMsg};
}//fun

module.exports = r_upd_orders_holdings;