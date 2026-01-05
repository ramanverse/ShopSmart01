const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ShopSmart Backend is running",
    timestamp: new Date().toISOString(),
  });
});

// Create Item Route (POST request demo)
app.post("/api/items", (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  // In a real app, you would save this to a database
  const newItem = {
    id: Math.floor(Math.random() * 1000), // Simulate ID generation
    name,
    price,
    description: description || "",
    createdAt: new Date().toISOString(),
  };

  res.status(201).json({
    message: "Item created successfully",
    data: newItem,
  });
});

// Root Route (optional, just to show something)
app.get("/", (req, res) => {
  res.send("ShopSmart Backend Service");
});

module.exports = app;
