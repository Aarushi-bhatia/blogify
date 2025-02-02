const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect("mongodb+srv://aarushibhatia27:VLawYgTAFqL1M0z2@cluster0.qmeu0.mongodb.net/")

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post('/signup', async function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ username: email});
  if(existingUser){
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password
  });
  
  user.save();
  res.json({
    "msg": "User created successfully"
  })
})

