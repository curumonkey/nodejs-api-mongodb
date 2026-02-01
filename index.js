const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ Connection error:", err));

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js API with Mongoose!" });
});

// Export for Vercel
module.exports = app;
