// routes/inventory.js
const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const Product = require('../models/Product');

router.patch('/updateInventory', async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Update Product quantity
    const product = await Product.findOne({ productId });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    product.quantityAvailable += quantity;
    product.lastUpdated = new Date();
    await product.save();

    res.json({ message: 'Inventory updated successfully', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
