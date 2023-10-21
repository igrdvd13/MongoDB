const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
}, {
  collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
