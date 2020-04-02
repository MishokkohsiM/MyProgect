'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express'),
    app = express(),
    request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use(cors());

const host = '127.0.0.1';
const port = '3000';

const Products = [
  'Kindzmarauli',
  'Mukuzani',
  'Saperavi',
  'Khvanchkara',
  'Akhasheni',

  'Asti',
  'Barolo',
  'Valpolicella',
];

const Countries = [
  'Russia',
  'Georgia',
  'Italy',
  'Spain',
  'Portugal',
  'Holland',
  'Great Britain',
];

const RESPONSE_CODES = {
  OK: 200,
  FORBIDDEN: 403,
  NOT_AUTHORIZED: 401,
  CONFLICT: 409
};

const User = {
  name: 'Misha'
};

app.get('/api/', (req, res) => {
  request('http://127.0.0.1:8000', (err, response, body) => {
    if (err) {
      console.log('no connection');
      return res.status(500).send({message: err});
    }
    console.log('');
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
      message: 'cleared'
    });
  });
});

app.get('/products', (req, res) => {
  console.log('products');
  res.set('Access-Control-Allow-Origin', '*');
  res.json({
    Products,
  });
});

app.get('/countries', (req, res) => {
  console.log('countries');
  res.set('Access-Control-Allow-Origin', '*');
  res.json({
    Countries,
  });
});

app.post('/login', cors(), (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  console.log('SignIN');
  console.log(req.body);
  if (!req.body || !req.body.login || !req.body.password) {
    res.status(RESPONSE_CODES.FORBIDDEN);
    res.json({
      message: 'Wrong request body format'
    })
  } else {
    const toInsert = {};
    toInsert.login = req.body.login;
    toInsert.password = req.body.password;
    console.log(toInsert);
    res.status(RESPONSE_CODES.OK);
    res.json(toInsert);
  }
});

app.options('/*', (req, res, next) => {
  res.status(RESPONSE_CODES.OK);
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
  res.set('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.end();
});

app.listen(port, host, () => {
  console.log(`Server listening port ${port}`);
});
