const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
//const userSchema = mongoose.Schema({
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
},
password: {
    type: String,
    required: true
} 
 })

 const Users = mongoose.model("Users", userSchema)

 module.exports = Users;