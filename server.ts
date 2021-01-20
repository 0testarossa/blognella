import express from "express"
import mongoose from "mongoose"
import cors from "cors"
// import todoRoutes from "./routes/index.js"
import path from "path";
import bodyParser from "body-parser";
import router from "./routes";

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const path = require('path');


const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

// const api = require('./routes/index');

// Configure app to use route

app.use(cors())
app.use(router)

// This middleware informs the express application to serve our compiled React files
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', function (req, res) {
    console.log("jestem");
    console.log(path.join(__dirname, '../client/build', 'index.html'));
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
      // res.sendFile(path.join(__dirname, '../client/src', 'index.html'));
  });
};

const uri = `mongodb://kiranella:czeczuga5@towerofbase-shard-00-00.psn5x.mongodb.net:27017,towerofbase-shard-00-01.psn5x.mongodb.net:27017,towerofbase-shard-00-02.psn5x.mongodb.net:27017/blognellaDatabase?ssl=true&replicaSet=towerOfBase-shard-0&authSource=admin&retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

