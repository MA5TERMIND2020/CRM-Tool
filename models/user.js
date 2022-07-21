const mongoose = require('mongoose');
const {Schema} = mongoose;

const user = new Schema({
name: {
    type: String
},
email: {
    type: String
},
password: {
    type: String
} 
 })

 const Users = mongoose.model("Users", user)

 module.exports = Users;