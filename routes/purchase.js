const express = require('express');
const router = express.Router();

const Supplier = require('../models/supplier');
const Product = require('../models/products');
const Purchase = require('../models/purchases');

router.get('/', async (req, res) => {
  // const purchases = await Purchase.find({});
  res.render('pages/purchases/index');
})

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const supplier = await Supplier.findById(id);
//   // const { products } = supplier;
//   // res.render('pages/purchases/new', {supplier, products});
//   console.log(supplier);
//   res.send(supplier);
// })

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const supplier = await Supplier.findById(id).populate('products');
    console.log(supplier);
    res.render('pages/purchases/show', {supplier});
})

router.get('/new', async(req, res) => {
  const supplierName = prompt('Please enter supplier name');
  // const {supplierName} = req.query;
  const suppliers = await Supplier.find({"name":supplierNAme}).populate('products');
  res.render('pages/purchases/new', {supplierName, supplier})
})

module.exports = router;
