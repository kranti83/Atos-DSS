var config = require('../../conf');
const mongoClient = require('mongoose');


mongoClient.connect(config.mongodbURL, function(err, database){
    if (err) return console.log(err);
    console.log("connected to mongoDB"); 
});

module.exports = mongoClient;
