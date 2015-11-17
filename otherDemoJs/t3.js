var http = require("http");
var fs = require("fs");

var request = require("request");


http.createServer(function (req, res) {
    var content ='';
    
    
     // fs.readFile("./demo.html", function (err, file) {
    //     content += file;        
    //     res.end(content);
    // });   
    
    request("http://www.csie.isu.edu.tw/upload/80203/index.html", function (err, response, body) {
        content += body;
        res.end(content);
    });

}).listen(3000);