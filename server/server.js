'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const express = require('express'),
    app = express(),
    request = require('request');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

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
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('xui');
    dbo.collection('sessions').find().toArray(function (err, results) {
      if (err) throw err;
      res.json({
        results,
      });
      db.close();
    });
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
    res.status(RESPONSE_CODES.OK);
    toInsert.login = req.body.login;
    toInsert.password = req.body.password;
    console.log(toInsert);
    res.json(toInsert);
  }
});

app.post('/wine', cors(), (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  console.log('addWine');
  if (!req.body || !req.body.wine_name || !req.body.wine_age ||
      !req.body.wine_country || !req.body.wine_price) {
    res.status(RESPONSE_CODES.FORBIDDEN);
    res.json({
      message: 'Wrong request body format'
    });
  } else {
    const md5sum = crypto.createHash('md5');
    md5sum.update(req.body.wine_name + req.body.wine_country);
    console.log(req.body.wine_name);
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      const dbo = db.db('xui');
      dbo.collection('sessions').findOne({wine_name: req.body.wine_name}, (err, result) => {
        console.log(result);
        if (!err && result) {
          res.status(RESPONSE_CODES.CONFLICT);
          console.log('User already exists');
          res.json({
            message: 'User already exists'
          });
        } else {
          const toInsert = {};
          toInsert.wine_name = req.body.wine_name;
          toInsert.wine_age = req.body.wine_age;
          toInsert.wine_price = req.body.wine_price;
          toInsert.wine_country = req.body.wine_country;
          toInsert.sissionID = md5sum.digest('hex');
          dbo.collection('sessions').insertOne(toInsert, (err) => {
            if (!err) {
              res.status(RESPONSE_CODES.OK);
              res.json(toInsert);
            }
          })
        }
        db.close();
      });
    })
  }
});

app.get('/countries', (req, res) => {
  console.log('countries');
  res.set('Access-Control-Allow-Origin', '*');
  res.json({
    Countries,
  });
});

app.get('/product/:productName', (req, res) => {
  console.log(req.params);
  res.set('Access-Control-Allow-Origin', '*');
  const product = req.params['productName'];
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('xui');
    dbo.collection('descriptionProduct').findOne({productName: product}, (err, result) => {
      console.log(result);
      if (err) throw err;
      if (!err && result) {
        res.json({
          name: result.productName,
          info: result.productInfo
        });
      } else {
        res.json({
          name: product,
          info: 'Описания нет',
        });
      }
      db.close();
    })
  });
});

const count = 4;
function pageNumber (obj, page) {
  console.log('tut');
  const start = count * (page - 1);
  let end = count * page;
  if (end > obj.length) {
    end = obj.length;
  }
  let result = [];
  for(let i = start; i < end; i++) {
    result.push(obj[i]);
  }
  return result;
}

app.get('/page/:page', (req, res) => {
  console.log(req.params);
  res.set('Access-Control-Allow-Origin', '*');
  const page = req.params['page'];
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db('xui');
    dbo.collection('sessions').find().toArray(function (err, result){
      if (err) throw err;
      // console.log(result);
      let pages = result.length / count;
      let pageArr = [];
      for (let i = 0; i < pages; i ++) {
        pageArr.push(i+1)
      }
      let newResult = pageNumber(result, page);
      console.log(newResult);
      res.json ({
        newResult,
        pages,
      })
      db.close();
    })
  });
});

// Разобраться
app.post('/select', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  console.log(req.body);
  if (!req.body || !req.body.countries) {
    res.status(RESPONSE_CODES.FORBIDDEN);
    res.json({
      message: 'Wrong request body format'
    });
  } else {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      const dbo = db.db('xui');
      const arr = req.body.countries;
      dbo.collection('sessions').find({'wine_country': {$in: arr}}).toArray((err, result) => {
        console.log(result);
        if (!err && result) {
          res.json({
            result
          });
        } else {
          res.json({
            message: 'Empty'
          });
        }
      });
      db.close();
    });
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
