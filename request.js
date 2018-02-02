const http = require('http')
const url = require('url')
const queryString = require('querystring')
http.createServer((req, res)=>{
  let method = req.method;
  let get = post = {},str = '';
  switch (method) {
    case 'GET':
      get = url.parse(req.url, true).query;
      res.write(`get请求：${JSON.stringify(get)}`);
      res.end();
      break;
    case 'POST':
      req.on('data', data=>{
        str += data;
      });
      req.on('end', ()=>{
        if (str) {
          post = queryString.parse(str);
          res.write(`post请求：${JSON.stringify(post)}`);
          res.end();
        }
      });
      break;
    default:
      res.write('404');
      res.end();
  }

  // 注意是异步，如果把 end 写在这里的话有可能会执行不到

}).listen(4040);
