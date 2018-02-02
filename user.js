/**
 * 用现有的知识创建一个服务器
 * 把用户的请求分为两大类，一个是对文件的访问，一个是对接口的访问
 */
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');
const users = {};
http.createServer((req, res) => {
  const obj = urlLib.parse(req.url, true);
  const url = obj.pathname;
  const GET = obj.query;
  const POST = querystring.parse(req.url);
  req.setEncoding('utf8');

  var str = '';
  req.on('data', data => {
    str += data;
  });
  req.on('end', () => {
    if (url == '/user') {
      // 接口，解析数据
      const msg = {
        "ok": false,
        "msg": "未知的 act"
      };
      switch (GET.act) {
        case 'reg':
          // 检查一个用户是否已经有了
          if (users[GET.user]) {
            msg.msg = "此用户已经存在";
          } else {
            users[GET.user] = GET.pass;
            msg.ok = true;
            msg.msg = "注册成功";
          }
          break;
        case 'login':
          if (users[GET.user] == null) {
            msg.msg = "用户名不存在";
          } else if (users[GET.user] != users[GET.pass]) {
            msg.msg = "用户名或密码有误";
          } else {
            msg.ok = true;
            msg.msg = "登录成功!";
          }
          break;
      }
      res.write(JSON.stringify(msg));
      res.end();
    } else {
      console.log('read file');
      // 文件请求
      fs.readFile('.'+url, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
          res.end();
        }
      });
    }
  });

}).listen(4040);
