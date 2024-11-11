const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
  inventoryId: { type: String, required: true, unique: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  location: { type: String, required: true },
  quantityAvailable: { type: Number, required: true },
  reorderLevel: { type: Number },
  lastUpdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Inventory', inventorySchema);
