// routes/payment.js
const express = require('express');
const router = express.Router();
const PurchaseOrder = require('../models/PurchaseOrder');

router.patch('/:orderId/pay', async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const purchaseOrder = await PurchaseOrder.findOne({ orderId });
    if (!purchaseOrder) return res.status(404).json({ error: 'Order not found' });

    purchaseOrder.status = 'confirmed';
    await purchaseOrder.save();

    res.json({ message: 'Payment confirmed', purchaseOrder });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
