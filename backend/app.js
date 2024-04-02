const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const boardRoutes = require('./routes/boardRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/boards', boardRoutes);
app.use('/tasks', taskRoutes);

// Connect to MongoDB
database.on('error', console.error.bind(console, 'MongoDB connection error:'));
database.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = app;
