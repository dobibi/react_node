const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        minlength:50
    },
    lastname: {
        type: String,
        maxlength:50
    },
    role: {
        type: Number,
       default:0 
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})


const User = mongoose.model('User', userSchema)

//model을 다른곳에서 쓸 수 있게 export
module.exports = {User}




