var http = require('http'),
    fs = require('fs');


<<<<<<< HEAD
fs.readFile('./index.html', function (err, html) {
=======
fs.readFile('/index.html', function (err, html) {
>>>>>>> 51cba90b5067d53e3d762a26b99d16969dfc9256
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
