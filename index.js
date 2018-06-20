const multer = require('multer')
const express = require('express')
const upload = multer({ dest: 'uploads/' })
const app = express()

app.post('/profile', upload.single('avatar'), (req, res, next) => {
  res.send(req.file)
})

app.post('/photos', upload.array('photos'), (req, res, next) => {
  res.send(req.files)
})

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    </head>
    <body>
      <form action="http://localhost:8080/profile" enctype="multipart/form-data" method="post">
        <input type="file" name="avatar" />
        <button type="submit">上传</button>
      </form>
    </body>
    </html>
  `)
})

app.get('/multiple', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    </head>
    <body>
      <form action="http://localhost:8080/photos" enctype="multipart/form-data" method="post">
        <input type="file" name="photos" multiple/>
        <button type="submit">上传</button>
      </form>
    </body>
    </html>
  `)
})
app.listen(8080, () => {
  console.log('http://localhost:8080')
})
