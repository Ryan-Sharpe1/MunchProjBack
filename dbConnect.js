var bodyParser = require('body-parser');
const app = require('./app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var MongoClient = require('mongodb').MongoClient;
const dbName = 'munchkin'
const url = 'mongodb://127.0.0.1:27017'
let db

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
if (err) return console.log(err)
db = client.db(dbName)
console.log(`Connected MongoDB: ${url}`)
console.log(`Database: ${dbName}`)
// db.collection("Players").insertOne(myobj, function(err, res) {
// if (err) throw err;
// console.log("1 document inserted");
// });
})
app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
  
  