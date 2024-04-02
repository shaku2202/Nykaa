const Board = require('../models/Board');

// Create a new board
async function createBoard(req, res) {
  try {
    const { name } = req.body;
    const board = await Board.create({ name });
    res.status(201).json({ board });
  } catch (error) {
    res.status(500).json({ message: 'Error creating board' });
  }
}

// Get all boards
async function getAllBoards(req, res) {
  try {
    const boards = await Board.find();
    res.json({ boards });
  } catch (error) {
    res.status(500).json({ message: 'Error getting boards' });
  }
}

// Get a specific board by ID
async function getBoardById(req, res) {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json({ board });
  } catch (error) {
    res.status(500).json({ message: 'Error getting board' });
  }
}

// Update a board by ID
async function updateBoard(req, res) {
  try {
    const { name } = req.body;
    const board = await Board.findByIdAndUpdate(req.params.id, { name }, { new: true });
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json({ board });
  } catch (error) {
    res.status(500).json({ message: 'Error updating board' });
  }
}

// Delete a board by ID
async function deleteBoard(req, res) {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }
    res.json({ message: 'Board deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting board' });
  }
}

module.exports = { createBoard, getAllBoards, getBoardById, updateBoard, deleteBoard };
