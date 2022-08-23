const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleSchema = new Schema({
      date: {
        type: Date,
        default: Date.now(),
        trim: true
      },
      invoiceNumber: {
        type: String
      },
      customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
      },
      orderItems:
      [
        {
        name: {
          type: String,
          require: true
        },
        qty: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        product: {
          type: Schema.Types.ObjectId,
          required: true
        }
      }
    ],
      totalPrice: {
        type: Number,
        required: true
      }
    })

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale;
