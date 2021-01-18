const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        max: 225
    },
    lastName: {
        type: String,
        required: true,
        max: 225
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        max: 1024
    }
})

module.exports = mongoose.model('User', userSchema)