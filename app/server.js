var express = require('express');
var inspector = require('./inspector');
var app = express();

app.get('/*', function(req, res) {
  var result = inspector(req);
  res.json(result);
});

module.exports = app;