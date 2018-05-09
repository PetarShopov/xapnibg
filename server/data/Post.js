const mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    likes: { type: Number },
    comments: { type: [String] },
    image: { type: String },
    author: { type: String },
    timestamp: { type: Date, default: Date.now() }
})

let Post = mongoose.model('Post', postSchema)

module.exports = Post
