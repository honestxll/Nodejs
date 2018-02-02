const express = require('express');

const server = express();
server.listen(4040);

server.use('/', (req, res, next) => {
  console.log('a');
  next();
})
server.use('/', (req, res, next) => {
  console.log('b');
})
