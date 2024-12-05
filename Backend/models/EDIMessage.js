const mongoose = require("mongoose");

const ediMessageSchema = new mongoose.Schema({
  sender: { type: String, required: true }, // Sender identifier
  receiver: { type: String, required: true }, // Receiver identifier
  messageType: {
    type: String,
    enum: ["PurchaseOrder", "Invoice", "OrderConfirmation"], // Enum of valid types
    required: true,
  },
  messageDate: { type: String, required: true }, // When the message was created or sent
  body: { type: String, required: true }, // Raw content or serialized data
  status: { type: String, default: "Pending" }, // Default status
});

module.exports = mongoose.model("EDIMessage", ediMessageSchema);
