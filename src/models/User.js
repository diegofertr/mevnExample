const db = require('mongoose')
const Schema = db.Schema

const User = new Schema({
  email: {type: String},
  password: {type: String}
}, {
  collection: 'users'
})

module.exports = db.model('User', User)
