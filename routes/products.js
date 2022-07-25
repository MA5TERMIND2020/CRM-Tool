const express = require('express');
const router = express.Router(); // will make a new router object

const Supplier = require('../models/supplier');
const Product = require('../models/products');
const categories = ['small', 'big', 'combo']

// show all products
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.render('pages/products/index', {products, categories});
})

router.get('/new', async (req, res) => {
  const product = await Product.find({})
  const supplier = await Product.find({}).populate('supplier');
  res.render('pages/products/new', {product, supplier, categories});
})

router.get('/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate('supplier');
  res.render('pages/products/edit', {product, categories});
})

// submit new
router.post('/', async(req, res) => {
  const product = new Product(req.body.product);
  await product.save();
  console.log('product');
  res.render('pages/products/index', {products, categories});
})

module.exports = router;
