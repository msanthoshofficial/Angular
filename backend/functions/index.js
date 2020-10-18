const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
//const main = express();
//const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')

//mongoose.connect('mongodb://localhost:27017/crud',{ useUnifiedTopology: true });
//const db = mongoose.connection;

admin.initializeApp(functions.config().firebase);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const db = admin.firestore();
const userCollection = "users";

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send("Welcome to the backend, search something useful... 😝")
});

app.get('/api/getCollection', async (req, res) => {
  try {
    const usersnap = await db.collection(userCollection).get();
    const users = [];
    usersnap.forEach((element) => {
      users.push({
        id: element.id, data: element.data()
      });
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
  //var result = await db.collection('users').find().toArray();
  //res.json(result)
})
const val = "sandyadmin007";

app.post('/api/addDoc', async (req, res) => {
  try {
    const querry = req.body.querry;
    if (querry.passcode === val) {
      delete querry.passcode;
      const newdoc = await db.collection(userCollection).add(querry)
      res.status(201).send(true);
    }
    else {
      res.status(400).send(false);
    }
  } catch (error) {
    res.status(400).send(false);
  }
  //var result = await db.collection('users').insertOne(querry);
  //if(result){res.send(true)} else {res.send(false)}
})

app.post('/api/upDoc', async (req, res) => {
  try {
    const querry = req.body.querry;
    if (querry.passcode === val) {
      delete querry.passcode;
      const docid = querry.id;
      delete querry.id;
      const newdoc = await db.collection(userCollection).doc(docid).set(querry)
      res.status(201).send(true);
    }
    else {
      res.status(400).send(false);
    }
  } catch (error) {
    res.status(400).send(false);
  }
})

app.post('/api/delDoc', async (req, res) => {
  try {
    const querry = req.body.querry;
    if (querry.passcode === val) {
      delete querry.passcode;
      const docid = querry.id;
      delete querry.id;
      const newdoc = await db.collection(userCollection).doc(docid).delete()
      res.status(201).send(true);
    }
    else {
      res.status(400).send(false);
    }
  } catch (error) {
    res.status(400).send(false);
  }
})

const port = process.env.PORT || 8080
app.listen(port, () => { console.log("Backend listening at port 8000") });
exports.app = functions.https.onRequest(app);