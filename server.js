const express = require("express");
const connectDB = require("./utils/db");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/ediMessage", require("./routes/ediMessageRoutes"));
app.use("/api/inventory", require("./routes/inventoryRoutes")); // Correctly use the inventory routes here

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
