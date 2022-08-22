const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleSchema = new Schema({
      date: {
        type: Date,
        required: true
      },
      invoiceNumber: {
        type: String
      },
      customer: {
        type: String,
        ref: 'Customer'
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
      totalPrice: {
        type: Number,
        required: true
      }
    })

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale;
