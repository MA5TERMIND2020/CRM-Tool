require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); //to be able to use app.put
const bcrypt = require('bcrypt');

const router = express.Router();

//import models
var Users = require('./models/user');

// require routes USER, PRODUCT, CUSTOMER, SUPPLIER

const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/supplier');

// mongoose.connect('mongodb://localhost:27017/crm', { useNewUrlParser: true })
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
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
app.use('/dashboard/products', productRoutes);
app.use('/dashboard/suppliers', supplierRoutes);

// Register New Users
app.post('/register', async (req, res) => {
  //try {
    //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = new Users(req.body.user)
    await userData.save()
    res.redirect('/login')
  

})

// show routes for REGULAR PAGES
app.get('/', (req, res) => {
  res.render('main');
});

app.get('/account', async (req, res) => {
  const users = Users.find({});
  res.render('account', {users});
})

// show routes for Register
app.get('/register', (req, res) => {
  res.render('register')
});

app.get('/login', (req, res) => {
  res.render('login');
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

// CUSTOMER'S SECTION
app.get('/dashboard/customers', (req, res) => {
  res.render('pages/customers/show');
})


app.listen(4000, () => {
  console.log('Serving port 4000')
});
