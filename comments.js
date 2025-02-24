// create a web server with node.js

var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var url = require("url");

var server = http.createServer(function (req, res) {
  if (req.method === "POST") {
    var body = "";
    req.on("data", function (data) {
      body += data;
    });

    req.on("end", function () {
      var POST = qs.parse(body);
      fs.readFile("comments.json", function (err, comments) {
        comments = JSON.parse(comments);
        comments.push(POST);
        fs.writeFile("comments.json", JSON.stringify(comments), function (err) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Thanks for the comment!");
        });
      });
    });
  } else {
    fs.readFile("comments.json", function (err, comments) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(comments);
    });
  }
});

server.listen(3000);
console.log("Server running on port 3000");
