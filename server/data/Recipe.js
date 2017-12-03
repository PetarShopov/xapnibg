const mongoose = require('mongoose')

let recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    preparation: { type: String, required: true },
    ingredients: { type: [String], required: true },
    image: { type: String, required: true },
    author: { type: String },
    timestamp: { type: Date, default: Date.now() }
})

let Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
