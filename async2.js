const fs = require('fs');

const readFile = (path) => (
  new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data);
    })
  })
)

const test = () => (
  new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  })
)

// 经过 async 修饰过之后，自动变成 Promise 对象
const f = async () => {
  await test(); // 因为异步的关系，这里会等待 2 秒，不过会先把执行代码的的控制权从 async 函数中返回出去，所以打印 test2 的部份会先执行，等到 2 秒后，再去执行下面的 readFile
  const data = await readFile('./www/template.html');
  console.log(data.toString());
}
f();
console.log('test22');
