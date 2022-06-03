const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: String,
    images: {
        type: Array,
        required: true
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)