const Task = require('../models/Task');

// Create a new task
async function createTask(req, res) {
  try {
    const { title, description, status, subtasks } = req.body;
    const task = await Task.create({ title, description, status, subtasks });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
}

// Get all tasks
async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error getting tasks' });
  }
}

// Get a specific task by ID
async function getTaskById(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Error getting task' });
  }
}

// Update a task by ID
async function updateTask(req, res) {
  try {
    const { title, description, status, subtasks } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status, subtasks }, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
}

// Delete a task by ID
async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
}

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
