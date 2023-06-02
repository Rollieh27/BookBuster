const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided URI or a local default URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookbuster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Export the database connection
module.exports = mongoose.connection;

