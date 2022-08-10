const mongoose = require('mongoose');
const { Schema } = mongoose;

const purchaseSchema = new Schema({
      date: {
        type: Date,
        required: true
      },
      supplier: {
        type: String,
        ref: 'Supplier'
      },
      orderItems: [{
        productName: {
          type: mongoose.Schema.Types.ObjectID,
          ref: 'Product',
          require: true
        },
        qty: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }],
      itemsPrice: {
        type: Number,
        required: true
      },
      shippingPrice: {
        type: Number,
        required: true
      },
      totalPrice: {
        type: Number,
        required: true
      }
    })

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase;
