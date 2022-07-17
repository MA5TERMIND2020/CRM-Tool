const express = require('express');
const router = express.Router(); // will make a new router object

const Supplier = require('../models/supplier');
const Product = require('../models/products');
const categories = ['small', 'big', 'combo']

router.get('/', async (req, res) => {
  const products = await Product.find({});
  console.log('showing products page');
  res.render('pages/products/index', {products, categories});
})

router.get('/new', async (req, res) => {
  const suppliers = await Supplier.find({});
  res.render('pages/products/new', {suppliers, categories});
})

router.get('/:id/edit', async (req, res) => {
  const { id } = req.body;
  const product = await Product.findById(id);
  res.render('pages/products/edit', {product, categories});
})

router.post('/:id', async(req, res) => {
  const product = new Product(req.body.product);
  await product.save();
  res.redirect(`/dashboard/products/${product._id}`, {product});
})

module.exports = router;
