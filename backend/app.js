const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud',{ useUnifiedTopology: true });
const db = mongoose.connection;

app.get('/', (req,res) => {
  res.send("Welcome to the backend, search something useful... 😝")
});

app.get('/api/getCollection', async  (req,res) => {
    var result = await db.collection('users').find().toArray();
    res.json(result)
})

app.listen(8000, () => { console.log("Backend listening at port 8000") });