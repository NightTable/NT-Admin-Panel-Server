// NightTable, LLC has been granted a license by John Nydam 
// to use this document and the information contained in it 
// for business objectives pertinent to the company. 
// It must not be copied, duplicated, or used in any manner, 
// or transmitted to others without the written consent of John Nydam. 
// It must be returned to John Nydam if and/or when its authorized use is terminated. 

const express = require('express')
const app = express()
const port = 4000;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Welcome to the admin panel server api!');
});

const mongooseConnection = mongoose.connect(process.env.DATABASE_URL ? process.env.DATABASE_URL : 'mongodb+srv://joygo34:newpassword45@cluster0.esl77.mongodb.net/test-dev?retryWrites=true&w=majority').then((res) => {
      console.log("Database connection successfully setup");
  })
  .catch((err) => {

      console.log(err);
      console.log("Looks like mongoose had an issue setting up");
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});