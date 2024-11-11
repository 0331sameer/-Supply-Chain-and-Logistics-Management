const mongoose = require('mongoose');

// Define the item schema
const ItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  quantityAvailable: { type: Number, required: true },
  price: { type: Number, required: true }
});

// Define the main PurchaseOrder schema
const PurchaseOrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  buyer: {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  orderDate: { type: Date, required: true },
  items: [ItemSchema],  // This allows items to be an array of product objects
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true, enum: ["pending", "confirmed", "shipped", "delivered", "canceled"] }
});

module.exports = mongoose.model('PurchaseOrder', PurchaseOrderSchema);
