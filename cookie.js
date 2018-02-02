const express = require('express')
const cookieParser = require('cookie-parser')

var server = express()

server.use(cookieParser())
server.use('/', (req, res) => {
  res.cookie('name', 'x10', {
    // path maxAge signed等键对
  })
  console.log(req.cookies)
  res.send('ok')
})

server.listen(4040)
