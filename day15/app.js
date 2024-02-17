// app.js

const express = require('express');
const loggingMiddleware = require('./loggingMiddleware');

const app = express();

// Use the logging middleware for all incoming requests
app.use(express.json()); // Middleware to parse JSON request body
app.use(loggingMiddleware);

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
