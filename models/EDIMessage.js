const mongoose = require('mongoose');

const ediMessageSchema = new mongoose.Schema({
    messageId: { type: String, required: true },
    sender: {
      userId: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true }
    },
    receiver: {
      userId: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true }
    },
    messageType: { 
      type: String, 
      enum: ["PurchaseOrder", "Invoice", "OrderConfirmation", "ShippingNotice"], 
      required: true 
    },
    messageDate: { type: Date, required: true },
    body: {
      orderDetails: { 
        type: String,  
        required: true 
      }
    }
  });
    
  
module.exports = mongoose.model('EDIMessage', ediMessageSchema);
