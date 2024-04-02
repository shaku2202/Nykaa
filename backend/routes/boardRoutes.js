const express = require('express');
const boardController = require('../controllers/boardController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Protected route using authentication middleware
router.use(authMiddleware);

// Create a new board
router.post('/', boardController.createBoard);

// Get all boards
router.get('/', boardController.getAllBoards);

// Get a specific board by ID
router.get('/:id', boardController.getBoardById);

// Update a board by ID
router.put('/:id', boardController.updateBoard);

// Delete a board by ID
router.delete('/:id', boardController.deleteBoard);

module.exports = router;
