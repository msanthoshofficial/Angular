const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require('path');
var cors = require('cors')

mongoose.connect('mongodb://localhost:27017/crud',{ useUnifiedTopology: true });
const db = mongoose.connection;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req,res) => {
  res.send("Welcome to the backend, search something useful... 😝")
});

app.get('/api/getCollection', async  (req,res) => {
    var result = await db.collection('users').find().toArray();
    res.json(result)
})

app.post('/api/addDoc', async (req,res) => {
  
  const { querry } = req.body;
  console.log("backemd",querry)
  var result = await db.collection('users').insertOne(querry);
  if(result){res.send(true)} else {res.send(false)};
})
const port = process.env.PORT || 8080
app.listen(port, () => { console.log("Backend listening at port 8000") });