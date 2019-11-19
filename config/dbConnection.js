var mongo = require('mongodb');

var connMongoDB = function(){
    var db = mongo.Db(
        'got',
        new mongo.Server('localhost',27017,{}),
        {}
    );
    
    return db;
}

module.exports = function(){
    return connMongoDB;
}