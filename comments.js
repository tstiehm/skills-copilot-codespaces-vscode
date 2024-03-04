
// Create web server
var express = require('express');
var app = express();

// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Start the server
var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// Create a route for the comments path
app.get('/comments', function(req, res) {
  res.send('Comments');
});

// Create a route for the comments path
app.get('/comments', function(req, res) {
  res.send('Comments');
});

// Create a route for the comments path
app.get('/comments', function(req, res) {
  res.send('Comments');
});

// Create a route for the comments path
app.get('/comments', function(req, res) {
  res.send('Comments');
});

// Create a route for the comments path
app.get('/comments', function(req, res) {
  res.send('Comments');
});

