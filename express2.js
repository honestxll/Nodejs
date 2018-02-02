const express = require('express');
const bodyParser = require('./lib/bodyParser');
const server = express();
server.listen(4040);

// server.use((req, res, next) => {
//   // 你可以在这里做你自己的中间件，处理你想处理的数据
//   req.body = 12;
//   next();
// })

server.use(bodyParser)

server.use('/', (req, res) => {
  console.log(req.body);
})
