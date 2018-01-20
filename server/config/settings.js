const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))
//mongodb://localhost:27017/xapnibg

module.exports = {
  development: {
    rootPath: rootPath,
    db: '',
    port: 1337
  },
  staging: {
  },
  production: {
    db: '',
    port: process.env.PORT
  }
}
