// Create web server and listen to port 3000
// Define routes
// Define a route for /comments
// Define a route for POST /comments
// Define a route for /comments/:id
// Define a route for PUT /comments/:id
// Define a route for DELETE /comments/:id

// Required modules
var http = require('http');
var url = require('url');
var comments = require('./comments');

// Create web server
var server = http.createServer(function (req, res) {
  // Parse request URL
  var urlParts = url.parse(req.url);

  // Define routes
  if (urlParts.pathname === '/comments' && req.method === 'GET') {
    comments.read(req, res);
  } else if (urlParts.pathname === '/comments' && req.method === 'POST') {
    comments.create(req, res);
  } else if (urlParts.pathname === '/comments' && req.method === 'PUT') {
    comments.update(req, res);
  } else if (urlParts.pathname === '/comments' && req.method === 'DELETE') {
    comments.delete(req, res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found\n');
  }
});

// Listen to port 3000
server.listen(3000);
console.log('Server running at http://localhost:3000/');