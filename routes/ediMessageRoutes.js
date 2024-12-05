const express = require("express");
const {
  createEDIMessage,
  getAllEDIMessages,
  deleteEDIMessage,
} = require("../controllers/ediMessageController");

const router = express.Router();

router.post("/", createEDIMessage); // Create a new EDI message
router.get("/", getAllEDIMessages); // Get all EDI messages
router.delete("/:id", deleteEDIMessage); // Delete an EDI message

module.exports = router;
