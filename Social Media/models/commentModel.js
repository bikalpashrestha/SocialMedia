const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: trure
    },
    tag: Object,
    reply: mongoose.Types.ObjectId,
    likes: [{type: mongoose.Types.ObjectedId, ref: 'user'}],
    user: {type: mongoose.Types.ObjectId, ref: 'user'}
}, {
    timestamps: true
})

module.exports = mongoose.model('comment', commentSchema)
