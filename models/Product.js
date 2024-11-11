const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  category: { type: String },
  quantityAvailable: { type: Number, required: true },
  reorderLevel: { type: Number },
  price: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
