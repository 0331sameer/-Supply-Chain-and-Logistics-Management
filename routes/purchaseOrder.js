const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PurchaseOrder = require('../models/PurchaseOrder');  // Make sure you have this model

// POST route for creating a new PurchaseOrder
router.post('/', async (req, res) => {
  try {
    const { orderId, buyer, orderDate, items, totalAmount, status } = req.body;

    // Ensure that all required fields are present
    if (!orderId || !buyer || !orderDate || !items || !totalAmount || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a new PurchaseOrder document
    const purchaseOrder = new PurchaseOrder({
      orderId,
      buyer,
      orderDate,
      items,
      totalAmount,
      status
    });

    // Save the document to the database
    await purchaseOrder.save();

    // Respond with the saved order
    res.status(201).json(purchaseOrder);
    console.log(purchaseOrder)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
