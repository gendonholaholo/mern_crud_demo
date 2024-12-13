const Item = require('../models/Item');

const createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create item' });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items' });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, { name, description }, { new: true });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update item' });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete item' });
  }
};

module.exports = { createItem, getItems, updateItem, deleteItem };
