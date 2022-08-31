const mongoose = require('mongoose');

// require model database
const Product = require('../models/products');
const Supplier = require('../models/supplier');
const Customer = require('../models/customer');
const User = require('../models/user')

mongoose.connect('mongodb://0.0.0.0:27017/crm', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Mongo connection open!!!");
  })
  .catch(() => {
    console.log("Oh no Mongo Connection error!!");
    console.log(err);
  })

// // -------------------- USER DATA -----------------------------
//
// const user = new User({
//   name: 'Don Ramon',
//   email: 'doncafe@gmail.com',
//   password: 'dragonfly',
//   company: 'Don Cafe',
//   address: 'Gulay St., Makabuhay, Philippines 6000',
//   tel: '444-5345-6674',
//   website: 'http://www.doncafe.com',
// })
//
// user.save()
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e);
//   })

// // -------------------- CUSTOMER DATA -----------------------------
// const seedCustomers = [{
//   name: 'Stephen Hammonds',
//   tel: '443-243-5532',
//   email: 'sh@gmail.com',
//   address: '475 Lenfant PLZ, Washington DC, 20260'
// }, {
//   name: 'Sherif Ackles',
//   tel: '423-5436-2233',
//   email: 'sa@gmail.com',
//   address: '123 Main St, Anytown OH, 12345'
// }, {
//   name: 'Jean Susor',
//   tel: '444-4234-5555',
//   email: 'js@gmail.com',
//   address: 'PO BOX 4237, Anytown MI, 12337'
// }]
// Customer.insertMany(seedCustomers)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })
// // -------------------- SUPPLIERS(3) DATA -----------------------------
const seedSuppliers = [{
    _id: '6300084bf1fb2a44558b4695',
    name: 'Kaldi Coffee',
    tel: '910-350-0990',
    email: 'kaldi@gmail.com',
    address: '278 Raleigh Street, Wilmington, Alabama'
  },
  {
    _id: '63021933bee5ac67250b24de',
    name: 'Red Diamond',
    tel: '800-543-4325',
    email: 'qcdept@reddiamond.com',
    address: '400 Park Avenue Moody, AL, 35004'
  },
  {
    _id: '63000860f1fb2a44558b4698',
    name: 'Wholesale Coffee Company Ltd',
    tel: '322-555-4853',
    email: 'wcc@gmail.com',
    address: 'Unit F2E Lomax Way, Logistics North Bolton, Alabama'
  }
]
Supplier.insertMany(seedSuppliers)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })
// // -------------------- 4 PRODUCTS FOR EACH SUPPLIER DATA -----------------------------
//
// // products for first supplier
// const seedProducts1 = [{
//     name: 'India Kaapi Royal',
//     intensity: 'Dark Roasting',
//     weight: '200g',
//     itemCost: 6,
//     sellingPrice: 9,
//     category: 'small',
//     currentStock: 40,
//     supplier: '6300084bf1fb2a44558b4695'
//   },
//   {
//     name: 'Peru El Palto',
//     intensity: 'Dark Roasting',
//     weight: '200g',
//     itemCost: 7,
//     sellingPrice: 9,
//     category: 'small',
//     currentStock: 20,
//     supplier: '6300084bf1fb2a44558b4695'
//   },
//   {
//     name: 'Ethiopia Yirgacheffe',
//     intensity: 'Light Roasting',
//     weight: '200g',
//     itemCost: 9,
//     sellingPrice: 11,
//     category: 'small',
//     currentStock: 40,
//     supplier: '6300084bf1fb2a44558b4695'
//   },
//   {
//     name: 'Ethiopia Alemu Werera',
//     intensity: 'Light Roasting',
//     weight: '200g',
//     itemCost: 10,
//     sellingPrice: 13,
//     category: 'small',
//     currentStock: 35,
//     supplier: '6300084bf1fb2a44558b4695'
//   }
// ]
//
// Product.insertMany(seedProducts1)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })
//
// // products for second supplier
// const seedProducts2 = [{
//     name: 'Brasil Cerrado',
//     intensity: 'Dark Roasting',
//     weight: '1000g',
//     itemCost: 30,
//     sellingPrice: 34,
//     category: 'big',
//     currentStock: 50,
//     supplier: '63021933bee5ac67250b24de'
//   },
//   {
//     name: 'Peru El Palto',
//     intensity: 'Dark Roasting',
//     weight: '1000g',
//     itemCost: 26,
//     sellingPrice: 29,
//     category: 'big',
//     currentStock: 40,
//     supplier: '63021933bee5ac67250b24de'
//   },
//   {
//     name: 'Ethiopia Yirgacheffe',
//     intensity: 'Dark Roasting',
//     weight: '1000g',
//     itemCost: 29,
//     sellingPrice: 32,
//     category: 'big',
//     currentStock: 40,
//     supplier: '63021933bee5ac67250b24de'
//   },
//   {
//     name: 'Ethiopia Alemu Werera',
//     intensity: 'Dark Roasting',
//     weight: '1000g',
//     itemCost: 29,
//     sellingPrice: 33,
//     category: 'big',
//     currentStock: 65,
//     supplier: '63021933bee5ac67250b24de'
//   }
// ]
//
// Product.insertMany(seedProducts2)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// products for THIRD supplier
const seedProducts3 = [{
    name: 'Four Pack Blend',
    intensity: 'Light Roasting',
    weight: '4x100g',
    itemCost: 15,
    sellingPrice: 19,
    category: 'combo',
    currentStock: 40,
    supplier: '63000860f1fb2a44558b4698'
  },
  {
    name: 'Four Pack Afrazia',
    intensity: 'Dark Roasting',
    weight: '4x100g',
    itemCost: 15,
    sellingPrice: 17,
    category: 'combo',
    currentStock: 60,
    supplier: '63000860f1fb2a44558b4698'
  },
  {
    name: 'Four Pack Amerika',
    intensity: 'Dark Roasting',
    weight: '4x100g',
    itemCost: 15,
    sellingPrice: 18,
    category: 'combo',
    currentStock: 65,
    supplier: '63000860f1fb2a44558b4698'
  },
  {
    name: 'Six Pack Amerika',
    intensity: 'Dark Roasting',
    weight: '6x100g',
    itemCost: 22,
    sellingPrice: 26,
    category: 'combo',
    currentStock: 35,
    supplier: '63000860f1fb2a44558b4698'
  }
]

Product.insertMany(seedProducts3)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })

// ------------------------------UPDATING SUPPLIER WITH PRODUCTS-----------------------------------------------
// const addProductsSupplier1 = async () => {
//   let supplierId = '6300084bf1fb2a44558b4695';
//   const newProducts1 = await Product.find({
//     'supplier': supplierId
//   });
//   updateSupplier(newProducts1, supplierId);
// }
//
// const addProductsSupplier2 = async () => {
//   let supplierId = '63021933bee5ac67250b24de';
//   const newProducts2 = await Product.find({
//     'supplier': supplierId
//   });
//   updateSupplier(newProducts2, supplierId);
// }

const addProductsSupplier3 = async () => {
  let supplierId = '63000860f1fb2a44558b4698';
  const newProducts3 = await Product.find({
    'supplier': supplierId
  });
  console.log(newProducts3);
  updateSupplier(newProducts3, supplierId);
}

const updateSupplier = async (products, supplierId) => {
  this.supplierId = supplierId
  console.log(this.supplierId);
  for (let newProduct of products) {
    const supplier = await Supplier.findOneAndUpdate({
      '_id': this.supplierId
    }, {
      $push: {
        products: newProduct._id
      }
    });
    console.log(supplier);
  }

};

addProductsSupplier3();
