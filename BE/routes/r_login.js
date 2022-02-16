var express = require('express');
var db = require('../db/db-mysql'); // ==== connect to mysqlx

var r_login = express.Router();

//r_login.post('/login', login(req, res));
//r_login.post('/register', register(req, res));
r_login.get('/', function(req, res, next) {
    var ObjPage = this.ObjPageMain;
    ObjPage.page = "registration.ejs"; //set which page to display
    res.render('index.ejs', { ObjPageMain: ObjPage });
});

var register = function(req, res) {
        // console.log("req",req.body);
        var today = new Date();
        var users = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "userName": req.body.userName,
            "phone": req.body.phone,
            "password": req.body.password,
            "created": today,
            "modified": today
        }
        db.query('INSERT INTO users SET ?', users, function(error, results, fields) {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                })
            } else {
                console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "success": "user registered sucessfully"
                });
            }
        });
    } // register


var login = function(req, res) {
        var email = req.body.email;
        var password = req.body.password;
        db.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                })
            } else {
                // console.log('The solution is: ', results);
                if (results.length > 0) {
                    if ([0].password == password) {
                        res.send({
                            "code": 200,
                            "success": "login sucessfull"
                        });
                    } else {
                        res.send({
                            "code": 204,
                            "success": "Email and password does not match"
                        });
                    }
                } else {
                    res.send({
                        "code": 204,
                        "success": "Email does not exits"
                    });
                }
            }
        });
    } //login

module.exports = r_login;