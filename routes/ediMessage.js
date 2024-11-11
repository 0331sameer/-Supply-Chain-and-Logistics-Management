const express = require('express');
const router = express.Router();
const EDIMessage = require('../models/EDIMessage');  
router.post('/', async (req, res) => {
  try {
    const ediMessageData = req.body;

    // Ensure orderDetails is a string (e.g., UUID)
    const ediMessage = new EDIMessage({
      messageId: ediMessageData.messageId,
      sender: ediMessageData.sender,
      receiver: ediMessageData.receiver,
      messageType: ediMessageData.messageType,
      messageDate: ediMessageData.messageDate,
      body: {
        orderDetails: ediMessageData.body.orderDetails,  
      }
    });

    await ediMessage.save();  // Save to the database
    res.status(201).json(ediMessage);
    console.log(ediMessage)
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
