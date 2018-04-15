const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))
//mongodb://localhost:27017/xapnibg

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://petar:123456@ds251807.mlab.com:51807/xapnibg',
		port: 1337
	},
	staging: {
	},
	production: {
		db: '',
		port: process.env.PORT
	}
}
