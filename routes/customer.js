const express = require('express');
const router = express.Router();

// require model database
const Customer = require('../models/customer');

router.get('/', async (req, res) => {
  const customers = await Customer.find({});
  res.render('pages/customers/index', {customers});
})

router.get('/new', (req, res) => {
  res.render('pages/customers/new');
})

router.post('/', async(req, res) => {
  const customer = new Customer(req.body.customer);
  await customer.save();
  res.redirect('/dashboard/customers');
})

module.exports = router;
