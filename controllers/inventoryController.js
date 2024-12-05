const Inventory = require("../models/Inventory");

// Update inventory quantity
exports.updateInventory = async (req, res) => {
  try {
    const { inventoryId, quantityAvailable } = req.body;

    const inventory = await Inventory.findById(inventoryId);
    if (!inventory) {
      return res.status(404).json({ error: "Inventory not found" });
    }

    inventory.quantityAvailable = quantityAvailable;
    inventory.lastUpdated = new Date(); // Update the lastUpdated timestamp
    await inventory.save();

    res.json({ message: "Inventory updated successfully", inventory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all inventory items
exports.getAllInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add an item to the inventory
exports.addInventoryItem = async (req, res) => {
  try {
    const { product, quantityAvailable, reorderLevel } = req.body;

    // Check if the inventory item already exists by product name
    const existingItem = await Inventory.findOne({ product });
    if (existingItem) {
      return res.status(400).json({ error: "Inventory item already exists" });
    }

    // Create a new inventory item
    const newItem = new Inventory({
      product,
      quantityAvailable,
      reorderLevel,
      lastUpdated: new Date(), // Set the current timestamp for lastUpdated
    });

    await newItem.save();
    res
      .status(201)
      .json({ message: "Inventory item added successfully", newItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove an item from the inventory
exports.removeInventoryItem = async (req, res) => {
  try {
    const { inventoryId } = req.params; // Get the inventoryId from the request parameters

    // Find and delete the inventory item by its ID
    const deletedItem = await Inventory.findByIdAndDelete(inventoryId);

    if (!deletedItem) {
      return res.status(404).json({ error: "Inventory item not found" });
    }

    res.json({ message: "Inventory item removed successfully", deletedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
