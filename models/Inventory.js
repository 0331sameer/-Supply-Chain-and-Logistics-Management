const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  product: { type: String, required: true }, // Product identifier (e.g., product ID)
  quantityAvailable: { type: Number, required: true }, // Available stock for the product
  reorderLevel: { type: Number, required: true }, // Reorder level for the product
  lastUpdated: { type: Date, required: true }, // Timestamp of the last inventory update
});

module.exports = mongoose.model("Inventory", inventorySchema);
