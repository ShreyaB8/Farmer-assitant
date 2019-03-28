var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var str = "";

app.route('/docid').get(function(req, res)

{
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
        var db = client.db('Docassist');
        var cursor = db.collection('patient1').find();
        //noinspection JSDeprecatedSymbols
        cursor.each(function(err, item) {

            if (item != null) {
                str = str + "    RFID id  " + item.RFID + "</br>";
            }
        });
        res.send(str);
        client.close();
    });
});

var server = app.listen(3000, function() {});