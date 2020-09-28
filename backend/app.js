const express = require('express')
const app = express();
const mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://localhost:27017/crud',{ useUnifiedTopology: true });
const db = mongoose.connection;

app.use(cors());

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

app.listen(8000, () => { console.log("Backend listening at port 8000") });