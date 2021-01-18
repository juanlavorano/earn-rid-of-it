const mongoose = require('mongoose')
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String
    },
    category: {
        type: String,
    },
    seller: {
        type: String,
    },
    // img: {
    //     data: Buffer,
    //     contentType: String,
    // },

})

module.exports = mongoose.model('Item', itemSchema)