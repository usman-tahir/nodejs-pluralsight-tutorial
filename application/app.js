
(function () {
  
  "use strict";
  var express = require("express"),
    app = express(),
    port = 5000;
  
  app.get("/", function (request, response) {
    response.send("Hello, World!");
  });
  
  app.get("/books", function (request, response) {
    response.send("Hello, Books!");
  });
  
  app.listen(5000, function (error) {
    console.log("Running server on port " + port);
  });
  
}());