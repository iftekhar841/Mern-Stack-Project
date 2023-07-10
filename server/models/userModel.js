const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    dateOfBirth:{
        type:Date,
        default:Date.now()
    },
    street1:{
        type:String,
        required: true
    },
    street2:{
        type:String,
        required: true
    },
    fileName:{
        type:String,
        required: true
    },
    typeOfFile:{
        type:String,
        required: true
    }
});

const User = mongoose.model('RAGISTRATIONUSER', userSchema);
module.exports = User;