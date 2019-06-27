/* Entry Point of Program */

var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

//Middleware for static files
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));

//Main Route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
  console.log(`Listening :${PORT}`);
});