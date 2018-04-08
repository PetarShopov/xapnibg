const mongoose = require('mongoose')

let responseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now() }
})

let Response = mongoose.model('Response', responseSchema)

module.exports = Response
