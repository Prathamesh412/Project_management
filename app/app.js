var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/prototype");
mongoose.connection.on('error',function(){
  console.log("Mongo Error in connection");
});

app.listen('5000', function(){
  console.log("Server at port 5000");
});

module.exports = app;