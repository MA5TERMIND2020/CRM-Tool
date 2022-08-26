const mongoose = require('mongoose');

// require model database
const Sale = require('../models/sales');

mongoose.connect('mongodb://0.0.0.0:27017/crm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })
  .then(() => {
    console.log("Mongo connection open!!!");
  })
  .catch(() => {
    console.log("Oh no Mongo Connection error!!");
    console.log(err);
  })

  const seedSales = [
    {
      date: 18/03/2022,
      invoiceNumber: 'Dark Roasting',
      customer: '62d87b3e8fe1f0e4cd44a49b',
      orderItems: [{
        name: 'Four Pack Blend',
        qty: 10,
        price: 15,
        product: '630219b0bee5ac67250b24e5'
      }],
      totalPrice: 150
    },
    {
      date: 18/03/2022,
      invoiceNumber: 'Dark Roasting',
      customer: '62d87b3e8fe1f0e4cd44a49b',
      orderItems: [{
        name: 'Four Pack Afrazia',
        qty: 20,
        price: 15,
        product: '630227cd798a4cf307f82a60'
      }],
      totalPrice: 300
    }
  ]

  // if any doesnt pass mongoose's validation, then nothing will be inserted
  Sale.insertMany(seedSales)
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
