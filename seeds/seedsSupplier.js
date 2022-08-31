const mongoose = require('mongoose');

// require model database
const Product = require('../models/products');
const Supplier = require('../models/supplier');
const Customer = require('../models/customer');
const User = require('../models/user')

mongoose.connect('mongodb://0.0.0.0:27017/crm', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Mongo connection open!!!");
  })
  .catch(() => {
    console.log("Oh no Mongo Connection error!!");
    console.log(err);
  })

// TO INSERT PRODUCTS ONE AT A TIME
const s = new Supplier ({
  _id: '6300084bf1fb2a44558b4695',
  name: 'Ruby Cafe Royal',
  tel: '910-350-0990',
  email: 'kaldi@gmail.com',
  address: '278 Raleigh Street, Wilmington, Alabama'
})

s.save()
  .then(s => {
    console.log(s)
  })
  .catch(e => {
    console.log(e);
  })

// if any of the seedProducts dont passed
// mongoose's validation, then nothing will be inserted
