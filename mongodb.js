const { MongoClient } = require('mongodb');

var url='mongodb://127.0.0.1:27017';
const client = new MongoClient(url, { useUnifiedTopology: true});
var _db;

module.exports = {
    connectToServer: function(callback) {
        client.connect(err=>{
            _db = client.db('ecom_mean');
            if(err)
                callback(err);
                else
                callback();
        })
    },
    getDBobject: function() {
        return _db;
    }
}