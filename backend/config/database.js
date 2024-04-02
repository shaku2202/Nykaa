// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kanban_board_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
