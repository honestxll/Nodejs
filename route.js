const express = require('express');
const ejs = require('ejs');
const path = require('path');

var app = express();
var router = express.Router();

app.set('views', path.resolve(__dirname, 'www'))
app.set('view engine', 'ejs')
router.get('/1.html', (req, res, next) => {
  res.render('ejsTemp1', { data: { name: 'x10' } })
})
router.get('/', (req, res, next) => {
  res.send('<h1>啥也没有</h1>')
})
app.use('/user', router);

app.listen(4040);
