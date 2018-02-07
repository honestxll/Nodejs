/**************************
 整合之前学习的内容做一个小案例
**************************/
const express = require('express');
const static = require('express-static'); // 读取静态文件
const cookieParser = require('cookie-parser'); // 使用 cookie
const cookieSession = require('cookie-session'); // 使用 session
const bodyParser = require('body-parser'); // 解析 post 数据，只能是数据，不能接收用户上传的文件

var app =  express();

/******************
 1.解析 cookie
 2.使用 session
 3.post 数据
 4.static 数据
******************/
app.use(cookieParser('123456')); // 对 cookie 做一个简单的签名

let keys = [1234, 'adaddsf', 'ssafdsafds']; // 加密为了安全
app.use(cookieSession({ name: 'session_id', keys: keys, maxAge: 20 * 60})); // 使用 session

app.use(bodyParser.urlencoded({ extended: false})); // 解析 post 数据

// 接受用户请求
app.use('/', (req, res, next) => {
  console.log(req.query, req.body, req.cookies, req.session);
})

app.use(static('./www')); // 使用静态数据

app.listen(4040);
