const mongoose = require('mongoose')
const Recipe = mongoose.model('Recipe')
const Beverage = mongoose.model('Beverage')
const Response = mongoose.model('Response')
const Post = mongoose.model('Post')
const User = mongoose.model('User')
const errorHandler = require('../utilities/error-handler')
const passport = require('passport')

module.exports = (app) => {
	app.get('/recipes/all', (req, res) => {
		const page = parseInt(req.query.page) || 1
		const selectedType = req.query.selectedType
		const pageSize = 6

		let startIndex = (page - 1) * pageSize
		let endIndex = startIndex + pageSize

		Recipe.find({})
			.then(recipes => {
				if (selectedType) {
					recipes = recipes.filter(function (item) {
						return item.type === selectedType;
					})
				}
				recipes = recipes.slice(startIndex, endIndex)
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

	app.get('/recipes/my-recipes/all', (req, res) => {
		const page = parseInt(req.query.page) || 1
		const owner = req.query.owner || ''
		const pageSize = 6

		let startIndex = (page - 1) * pageSize
		let endIndex = startIndex + pageSize

		Recipe.find({})
			.then(recipes => {
				recipes = recipes.filter(function (item) {
					return item.author === owner;
				});
				recipes = recipes.slice(startIndex, endIndex)
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

	app.post('/recipes/edit', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			let recipeReq = req.body;

			Recipe.update(
				{ _id: recipeReq._id },
				{
					title: recipeReq.title || 'No Title',
					preparation: recipeReq.preparation || 'No Preparation',
					ingredients: recipeReq.ingredients || ['No Ingredients'],
					image: recipeReq.image || 'No Image',
					type: recipeReq.type || 'No Type',
					author: recipeReq.author,
					timestamp: +Date.now()
				}
			).then(recipe => {
				res.status(200).json({
					success: true,
					message: 'Recipe edited successfully.',
					recipe: recipeReq
				})
			})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
				})
		})(req, res)
	})

	app.post('/recipes/delete/:id', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			const id = req.params.id

			Recipe.findByIdAndRemove(id)
				.then(output => {
					res.status(200).json({
						success: true,
						message: 'Recipe deleted successfully.',
						output
					})
				})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
				})
		})(req, res)
	})

	app.post('/recipes/add', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			let recipeReq = req.body;

			Recipe
				.create({
					title: recipeReq.title || 'No Title',
					preparation: recipeReq.preparation || 'No Preparation',
					ingredients: recipeReq.ingredients || ['No Ingredients'],
					image: recipeReq.image || 'No Image',
					type: recipeReq.type || 'No Type',
					author: recipeReq.author,
					timestamp: +Date.now()
				})
				.then(recipe => {
					res.status(200).json({
						success: true,
						message: 'Recipe added successfully.',
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
		})(req, res)
	})

	app.post('/contacts/response', (req, res) => {
		let responseReq = req.body;

		Response
			.create({
				name: responseReq.name || 'No Name',
				email: responseReq.email || 'No Email',
				subject: responseReq.subject || 'No Subject',
				message: responseReq.message || 'No Message',
				date: responseReq.date || 'No Date',
				type: responseReq.type || 'No Type',
				mark: responseReq.mark || 'No Mark',
				timestamp: +Date.now()
			})
			.then(response => {
				res.status(200).json({
					success: true,
					message: 'Response added successfully.',
					response
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

	app.get('/analytics', (req, res) => {
		Recipe.find({})
			.then(recipes => {
				Beverage.find({})
					.then(beverages => {
						Response.find({})
							.then(responses => {
								User.find({})
									.then(users => {
										res.status(200).json({
											success: true,
											recipes: recipes.length,
											beverages: beverages.length,
											responses: responses.length,
											users: users.length,
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
							.catch(err => {
								let message = errorHandler.handleMongooseError(err)
								return res.status(200).json({
									success: false,
									message: message
								})
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
			.catch(err => {
				let message = errorHandler.handleMongooseError(err)
				return res.status(200).json({
					success: false,
					message: message
				})
			})
	})

	app.get('/admin', (req, res) => {
		User.find({})
			.then(users => {
				res.status(200).json({
					success: true,
					users: users
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

	app.post('/users/delete/:id', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			const id = req.params.id

			User.findByIdAndRemove(id)
				.then(output => {
					res.status(200).json({
						success: true,
						message: 'User deleted successfully.',
						output
					})
				})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
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
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
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
						message: 'Beverage added successfully.',
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
		})(req, res)
	})

	app.get('/posts/all', (req, res) => {
		const page = parseInt(req.query.page) || 1
		const pageSize = 6

		let startIndex = (page - 1) * pageSize
		let endIndex = startIndex + pageSize

		Post.find({})
			.then(posts => {
				posts = posts.slice(startIndex, endIndex)
				res.status(200).json({ posts })
			})
			.catch(err => {
				let message = errorHandler.handleMongooseError(err)
				return res.status(200).json({
					success: false,
					message: message
				})
			})
	})

	app.post('/posts/add', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			let postReq = req.body;

			Post
				.create({
					content: postReq.content || 'No Content',
					likes: 0,
					comments: [],
					image: postReq.image || 'No Image',
					author: postReq.author,
					timestamp: +Date.now()
				})
				.then(post => {
					res.status(200).json({
						success: true,
						message: 'Post added successfully.',
						post
					})
				})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
				})
		})(req, res)
	})

	app.post('/posts/comment', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			let postReq = req.body;

			Post
				.update(
					{ _id: postReq._id },{
					comments: postReq.comments
				})
				.then(post => {
					res.status(200).json({
						success: true,
						message: 'Post commented successfully.',
						post
					})
				})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
				})
		})(req, res)
	})

	app.post('/posts/like', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			let postReq = req.body;

			Post
				.update(
					{ _id: postReq._id },{
					likes: postReq.likes
				})
				.then(post => {
					res.status(200).json({
						success: true,
						message: 'Post liked successfully.',
						post
					})
				})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
				})
		})(req, res)
	})

	app.post('/posts/delete', (req, res) => {
		return passport.authenticate('protected-request', (err, user) => {
			if (err) {
				return res.status(200).json({
					success: false,
					message: err.message
				})
			}

			if (!user) {
				return res.status(200).json({
					success: false,
					message: 'You do not have access to do this!'
				})
			}
			let postReq = req.body;
			const id = postReq._id

			Post.findByIdAndRemove(id)
				.then(output => {
					res.status(200).json({
						success: true,
						message: 'Post deleted successfully.',
						output
					})
				})
				.catch(err => {
					let message = errorHandler.handleMongooseError(err)
					return res.status(200).json({
						success: false,
						message: message
					})
				})
		})(req, res)
	})

	app.all('*', (req, res) => {
		res.status(404)
		res.send('404 Not Found!')
		res.end()
	})
}
