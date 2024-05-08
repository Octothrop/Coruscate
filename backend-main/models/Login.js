const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4 
    },
    role: {
        type: String,
        default: 'member'
    },
    ban: {
        type: Boolean,
        default: false
    }
},{collection : 'logins'});

const Login = mongoose.model('Login', userSchema); 

module.exports = Login;