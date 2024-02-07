// node app.js
const express = require('express');
const requestLoggerMiddleware = require('./rLoggerMiddleware');
const app = express();
app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.on('error', (error) => { 
  console.error(error);
});

req.end();

