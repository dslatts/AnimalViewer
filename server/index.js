const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const path = require('path');
const cats = require('./data');
//create a new http server
const app = express();

//add middleware to parse req.body
app.use(bodyParser.json());

//add middleware to log requests + responses
app.use(volleyball);

//base route serves html page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../browser/index.html'));
});

//route to serve bundled javascript
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../browser/bundle.js'));
});

//endpoint to grab cats
app.get('/api/animals', function (req, res) {
  res.json(cats);
});

//set up server on port 3000
app.listen(3000, () => console.log('listening on port 3000'));
