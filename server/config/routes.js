const auth = require('./auth')
const mongoose = require('mongoose')
const Recipe = mongoose.model('Recipe')
const Beverage = mongoose.model('Beverage')
const User = mongoose.model('User')
const errorHandler = require('../utilities/error-handler')
const passport = require('passport')

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

  app.post('/users/register', (req, res) => {
    return passport.authenticate('local-signup', (err) => {
      if (err) {
        return res.status(200).json({
          success: false,
          message: err
        })
      }

      return res.status(200).json({
        success: true,
        message: 'You have successfully signed up! Now you should be able to log in.'
      })
    })(req, res)
  })

  app.post('/users/login', (req, res) => {
    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(200).json({
            success: false,
            message: err.message
          })
        }
  
        return res.status(200).json({
          success: false,
          message: err.message
        })
      }
  
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        user: userData
      })
    })(req, res)
  })

  app.get('/beverages/all', (req, res) => {
    Beverage.find({})
      .then(beverages => {
        res.status(200).json({ beverages })
      })
      .catch(err => {
        let message = errorHandler.handleMongooseError(err)
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  })

  app.post('/beverages/add', (req, res) => {
    let beverageReq = req.body;

    Beverage
      .create({
        name: beverageReq.name || 'No Name',
        preparation: beverageReq.preparation || 'No Preparation',
        preparationTime: beverageReq.preparationTime || 'No Preparation Time',
        ingredients: beverageReq.ingredients || ['No Ingredients'],
        image: beverageReq.image || 'No Image',
        author: beverageReq.author,
        timestamp: +Date.now()
      })
      .then(beverage => {
        res.status(200).json({
          success: true,
          message: 'Beverage added successfuly.',
          beverage
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

  // app.post('/users/logout', controllers.users.logout)
  // app.get('/users/me', controllers.users.profile)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
