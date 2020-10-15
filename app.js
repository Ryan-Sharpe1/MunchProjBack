
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var cors = require('cors')
app.use(cors())



//Middleware

var postRoute = require ('./routes/playerRoute')


//Routes in main page
app.get('/', function(req, res, next) {
  res.send("homepage main route")
});


//Routes

app.use('/post', postRoute)



//Database connection

var mongoDB = 'mongodb://localhost:27017/munchkin';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log("connected to mongo db")});

//Port to listen on

app.listen(4000,() => console.log("we are connected to port 4000"));

module.exports = app;
