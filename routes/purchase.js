const express = require('express');
const router = express.Router(); // will make a new router object

const Supplier = require('../models/supplier');
const Product = require('../models/products');
const Purchase = require('../models/purchases');

router.get('/', (req, res) => {
    // const products = await Purchase.find({});
    res.render('pages/purchases/index');
})

router.get('/new', async (req, res) => {
  const product = await Product.find({})
  const suppliers = await Supplier.find({}, {"name":1});
  res.render('pages/products/new', {product, suppliers, categories});
})

module.exports = router;
