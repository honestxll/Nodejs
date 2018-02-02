/**
 * 使用步骤：
 *  创建服务
 *  监听
 *  处理请求
 *    get  post  use(通吃)
 */
const express = require('express');
const expressStatic = require('express-static');

var server = express();
// server.use('/', (request, response) => {
//   // send 比 write 是 express 对 write 的改进版
//   // 原来的 write 不能读 json，现在的 send 就可以
//   response.send('<h1>test</h1>');
//   response.end();
// });

const user = {
  test: 123
}

server.get('/login', (req, res) => {
  let userInfo = req.query
  let name = userInfo.name
  let pass = userInfo.pass
  if(user[name] == null) {
    res.send({ok: false, msg: '用户不存在'})
  } else if (user[name] != pass) {
    res.send({ok: false, msg: '用户名或密码不正确'})
  } else {
    res.send({ok: true, msg: '登录成功'})
  }
  res.end()
})
// 处理用户对文件的访问
server.use(expressStatic('./www'));

server.listen(4040);
