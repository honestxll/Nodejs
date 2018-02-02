/**
 * 使用步骤：
 *  创建服务
 *  监听
 *  处理请求
 *    get  post  use(通吃)
 */
const express = require('express');

var server = express();
server.use('/', (request, response) => {
  // send 比 write 是 express 对 write 的改进版
  // 原来的 write 不能读 json，现在的 send 就可以
  response.send('<h1>test</h1>');
  response.end();
});

server.listen(4040);
