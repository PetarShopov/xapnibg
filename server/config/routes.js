const auth = require('./auth')
const mongoose = require('mongoose')
const Recipe = mongoose.model('Recipe')
const errorHandler = require('../utilities/error-handler')

module.exports = (app) => {
  app.get('/recipes/all', (req, res) => {
    Recipe.find({})
      .then(recipes => {
        res.status(200).json({ recipes })
      })
      .catch(err => {
        let message = errorHandler.handleMongooseError(err)
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  })

  app.get('/recipes/:id', (req, res) => {
    const id = req.params.id

    Recipe.findById(id)
      .then(recipe => {
        res.status(200).json(recipe)
      })
      .catch(err => {
        let message = errorHandler.handleMongooseError(err)
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  })

  app.post('/recipes/add', (req, res) => {
    let recipeReq = req.body;

    Recipe
      .create({
        title: recipeReq.title || 'No Title',
        preparation: recipeReq.preparation || 'No Preparation',
        ingredients: recipeReq.ingredients || ['No Ingredients'],
        image: recipeReq.image || 'No Image',
        author: recipeReq.author,
        timestamp: +Date.now()
      })
      .then(recipe => {
        res.status(200).json({
          success: true,
          message: 'Recipe added successfuly.',
          recipe
        })
      })
      .catch(err => {
        let message = errorHandler.handleMongooseError(err)
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  })

  // app.get('/users/register', controllers.users.registerGet)
  // app.post('/users/register', controllers.users.registerPost)
  // app.get('/users/login', controllers.users.loginGet)
  // app.post('/users/login', controllers.users.loginPost)
  // app.post('/users/logout', controllers.users.logout)
  // app.get('/users/me', controllers.users.profile)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
