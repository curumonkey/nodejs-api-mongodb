const Item = require("../models/Item");

// GET all items
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// POST new item
exports.createItem = async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
};

// PUT update item
exports.updateItem = async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE item
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
