const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
       name:{
           type:String,
           required:true
       },
       email:{
           type:String,
           requited:true,
           unique:true
       },
    }
)
module.exports = User = mongoose.model('User',UserSchema)