const mongoose = require('mongoose')

let beverageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    preparation: { type: String, required: true },
    preparationTime: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    image: { type: String, required: true },
    author: { type: String },
    timestamp: { type: Date, default: Date.now() }
})

let Beverage = mongoose.model('Beverage', beverageSchema)

module.exports = Beverage
