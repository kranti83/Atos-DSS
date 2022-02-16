var config = require('../../conf');
const con = require('mysql').createConnection({

    host: config.mysqlHost,
    //port:3308,
    user: config.mysqlUser,
    password: config.mysqlPass,
    database: config.mysqlDB
});

con.connect(function(err) {
    if (err) return console.log('ERROR == ' + __filename + ' == ' + err.message)
    console.log('INFO == ' + __filename + ' == connected to mysql');
})

module.exports = con;