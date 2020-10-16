var express = require("express");
var app = express.Router();
const Post = require("../models/Posts")
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) =>{
Post.findOne({'PlayerName':'tot'}, function (err,person){
  if (err) return handleError(err);
  console.log(person.PlayerName)
  res.send(person.PlayerName)
}) 

})

app.post('/',(req,res)=>{
  const player = new Post({ PlayerName: req.body.PlayerName})
  console.log(req.body)
  player.save()
    .then(data => {res.json(data)}).catch(err => { res.json({message: err})})
  
})


module.exports = app
