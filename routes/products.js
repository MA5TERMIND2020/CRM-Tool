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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('pages/products/show', {product});
})  

router.get('/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  const supplierNames = await Supplier.find({}, {"name":1});
  res.render('pages/products/edit', {product, categories, supplierNames});
})

router.put('/:id', async(req, res) => {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, { ...req.body.product })
  console.log(req.body);
  res.redirect('/dashboard/products');
})

// submit new
router.post('/', async(req, res) => {
  const product = new Product(req.body.product);
  await product.save();
  console.log('product');
  res.render('pages/products/index', {products, categories});
})

// delete from index
router.delete('/:id', async (req,res) => {
  const { id } = req.params;
  const products = await Product.find({});
  const deleted = await Product.findByIdAndDelete(id);
  console.log(`deleted ${deleted}`);
  res.redirect('/dashboard/products');
});

// Delete route from show individual item route
router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/dashboard/products');
})

module.exports = router;
