const express = require("express");
const router = express.Router(); // Use router, not app
const inventoryController = require("../controllers/inventoryController");

// Route to get all inventory items
router.get("/", inventoryController.getAllInventory); // Fix the path to `/` for the `getAllInventory`

// Route to add an inventory item
router.post("/", inventoryController.addInventoryItem); // Fix the path to `/` for POST

// Route to update inventory quantity
router.patch("/update", inventoryController.updateInventory); // Use `/update` as the path

// Route to remove an inventory item
router.delete("/:inventoryId", inventoryController.removeInventoryItem); // Use dynamic `:inventoryId` for DELETE route

module.exports = router; // Export router, not app
