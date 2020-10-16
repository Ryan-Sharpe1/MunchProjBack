var express = require("express");
var app = express.Router();
const Player = require("../models/Player")
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/findPlayer", (req, res) =>{
Player.findOne({'PlayerName':'chicken eggs'}, function (err,person){
  if (err) return handleError(err);
  console.log(person)
  res.send(person)
}) 

})


app.get("/allPlayerNames", (req, res) => {
  Player.find({}, function (err,data){
    if (err) return handleError(err);
    console.log(data[0].PlayerName)
    res.send(data[0].PlayerName)
  })
})

app.post('/addPlayer',(req,res)=>{
  const player = new Player({ 
    
    PlayerName: req.body.PlayerName,
    Head: req.body.Head,
    Chest: req.body.Chest,
    oneHand: req.body.oneHand,
    mainHand:req.body.mainHand,
    Legs: req.body.Legs,
    Feet: req.body.Feet
  
  })
  console.log(req.body)
  player.save()
    .then(data => {res.json(data)}).catch(err => { res.json({message: err})})
  
})


module.exports = app
