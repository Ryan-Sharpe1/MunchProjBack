var express = require("express");
var app = express.Router();
const Post = require("../models/Posts")
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) =>{
res.send("this is posts route")

})

app.post('/',(req,res)=>{
  const player = new Post({ PlayerName: req.body.PlayerName})
  player.save()
    .then(data => {res.json(data)}).catch(err => { res.json({message: err})})
  
})


module.exports = app
