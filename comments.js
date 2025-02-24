// create a web server that listens to the port 3000
// and serves a file called comments.js
// when someone visits http://localhost:3000/comments.js
// send them the file comments.js

var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url === "/comments.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fs.createReadStream(__dirname + "/comments.js").pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
console.log("Server listening on port 3000");
