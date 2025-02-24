// create web server
// create a web server with express
const express = require("express");
const app = express();

// add a route to the web server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
