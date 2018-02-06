const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const pathLib = require('path');
const fs = require('fs');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.post('/upload', upload.single('avatar'), (req, res, next) => {
  res.send(req.file);
})


/******************************
 使用 multer 上传文件并保存文件名
 其实就是用 fs 来做一次重命名
 我使用了 multer 官网给的 api
 diskStorage 但没有成功
******************************/
app.post('/save', upload.single('avatar'), (req, res, next) => {

  let parseData = pathLib.parse(req.file.originalname),
      suffix = parseData.ext,
      newName = req.file.filename + suffix;
  fs.rename(req.file.path, newName, (err) => {
    err ? console.log('上传失败') : console.log('上传成功');
  })
  res.send('ok');
})

app.listen(4040);
