const db = require('mongoose');
const Schema = db.Schema;

const Item = new Schema({
  name: {type: String},
  price: {type: Number}
}, {
  collection: 'items'
});

module.exports = db.model('Item', Item);
