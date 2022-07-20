const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Supplier must have a name!']
  },
  tel: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: [true, 'Email required']
  },
  address: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
