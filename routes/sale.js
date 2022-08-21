const express = require('express');
const router = express.Router();

const Customer = require('../models/customer');
const Product = require('../models/products');
// const Sale = require('../models/sales');

router.get('/', async (req, res) => {
  res.render('pages/sales/index');
})

router.get('/new', async(req, res) => {
  const customers = await Customer.find({});
  const products = await Product.find({});
  res.render('pages/sales/new', {customers, products})
})

module.exports = router;
