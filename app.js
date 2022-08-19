require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); //to be able to use app.put
const session = require('express-session'); // needed for flash to work; stores data to local memory
const flash = require('connect-flash'); //
const Joi = require('joi'); // for validation

// variables that deal with errors
const ExpressError = require('./utilities/ExpressError');

const sessionOptions = {secret: 'hushhush', resave: false, saveUninitialized: false}
app.use(session(sessionOptions));
app.use(flash());

// require routes USER, PRODUCT, CUSTOMER, SUPPLIER
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/supplier');
const customerRoutes = require('./routes/customer');
const purchaseRoutes = require('./routes/purchase');
const saleRoutes = require('./routes/sale')

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb://0.0.0.0:27017/crm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo connection open!!!");
  })
  .catch(() => {
    console.log("Oh no Mongo Connection error!!");
    console.log(err);
  })


// Static Files
app.use(express.static(path.join(__dirname, 'public')));


// ejs allows us to use javascript codes within html files
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

// to setup the path
app.set('views', path.join(__dirname, 'views'));

// Parsing Middleware
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

// To use the exported routes
app.use('/users', userRoutes);
app.use('/dashboard/products', productRoutes);
app.use('/dashboard/suppliers', supplierRoutes);
app.use('/dashboard/customers', customerRoutes);
app.use('/dashboard/purchases', purchaseRoutes);
app.use('/dashboard/sales', saleRoutes);

// show routes for REGULAR PAGES
app.get('/', (req, res) => {
  res.render('main');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login', {error: false});
})

// this is just for designing purposes,
// must be deleted once deployed because dashboard must depend on who was logged in
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
})

app.post('/dashboard', (req, res) => {
  console.log('you are logged in')
  res.render('dashboard');
})

app.all('*', (req, res, next) => { // * means for any kind of path
  next(new ExpressError('Page Not Found'), 404)
})

app.use((err, req, res, next) => {
  const { statusCode = 500} = err; // 500 and 'something went wrong' is just the default
  if(!err.message) err.message = 'Oh no, Something went wrong!'
  res.status(statusCode).render('error', {err});
})


app.listen(4000, () => {
  console.log('Serving port 4000')
});
