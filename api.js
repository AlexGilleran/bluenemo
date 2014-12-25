var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bluenemo.db');
var express = require('express');
var restapi = express();
 
restapi.get('/', function(req, res){
    db.get("SELECT * from bluenemo", function(err, table) {
        res.json({"bluenemo":table})
    });
});
 
restapi.listen(3000);
 
console.log("Submit GET or POST to http://localhost:3000/data");