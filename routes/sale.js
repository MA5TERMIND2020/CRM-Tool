const express = require('express');
const router = express.Router();

const Customer = require('../models/customer');
const Product = require('../models/products');
// const Sale = require('../models/sales');

router.get('/', async (req, res) => {
  res.render('pages/sales/index');
})

module.exports = router;
