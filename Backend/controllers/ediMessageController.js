const EDIMessage = require("../models/EDIMessage");

// Create a new EDI Message
exports.createEDIMessage = async (req, res) => {
  try {
    const { sender, receiver, messageType, date, message } = req.body;
    messageDate = new Date(date);
    body = message;
    if (!sender) {
      return res.status(400).json({ error: "Sender is required." });
    }
    if (!receiver) {
      return res.status(400).json({ error: "Receiver is required." });
    }
    if (!messageType) {
      return res.status(400).json({ error: "Message type is required." });
    }
    if (!messageDate) {
      return res.status(400).json({ error: "Message date is required." });
    }
    if (!body) {
      return res.status(400).json({ error: "Body is required." });
    }
    // Validate required fields
    if (!sender || !receiver || !messageType || !messageDate || !body) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const ediMessage = new EDIMessage({
      sender,
      receiver,
      messageType,
      messageDate,
      body,
    });

    await ediMessage.save();

    res.status(201).json({
      message: "EDI Message created successfully",
      ediMessage,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all EDI Messages
exports.getAllEDIMessages = async (req, res) => {
  try {
    const ediMessages = await EDIMessage.find();
    res.json(ediMessages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an EDI Message by ID
exports.deleteEDIMessage = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the message by ID
    const ediMessage = await EDIMessage.findByIdAndDelete(id);

    if (!ediMessage) {
      return res.status(404).json({ error: "EDI Message not found." });
    }

    res.status(200).json({
      message: "EDI Message deleted successfully.",
      ediMessage,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
