const express = require('express');
const router = express.Router();

const Sale = require('../models/sales');
const Customer = require('../models/customer');
const Product = require('../models/products');

router.get('/', async (req, res) => {
  const sales = await Sale.find({});
  // res.send(sales);
  res.render('pages/sales/index', {sales});
})

router.get('/new', async(req, res) => {
  const customers = await Customer.find({});
  const products = await Product.find({});
  res.render('pages/sales/new', {customers, products})
})

module.exports = router;
