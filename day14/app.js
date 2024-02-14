// app.js
const express = require('express');
const cachingMiddleware = require('./cachingMiddleware');

const app = express();

app.use(cachingMiddleware);

app.get('/api/data', (req, res) => {
  const data = { message: 'This is some data from the server.' };
  res.send(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
