var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bluenemo.db');
 
db.serialize(function() {
 
    db.each("SELECT * from bluenemo", function(err, row) {
        console.log(row);
    });
});
 
db.close();