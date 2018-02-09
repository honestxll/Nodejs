/**************************************************
 之间看了 Generator，它确实有点儿不好理解
 async 是 Generator 的语法糖
 说白了就是提供了另一种更好的 Generator 的实现方式
**************************************************/
const fs = require('fs');

const readFile = (fileName) => (
  new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error)
        return reject(error);
      resolve(data);
    })
  })
)
// const read = function* () {
//   const f1 = yield readFile('./www/template.html');
//   const f2 = yield readFile('./www/template2.html');
// }
// const iter = read();
// iter.next().value.then(data => console.log(data.toString()));
// iter.next().value.then(data => console.log(data.toString()));

// 如果上面的内容写成 async 的形式，应该就是这样：
const asyncReadFile = async () => {
  const f1 = await readFile('./www/template.html'); // 这里返回的就是 readFile 的 data Buffer
  const f2 = await readFile('./www/template2.html');
  // console.log(f1.toString());
  // console.log(f2.toString());
  return f1; // 通过 result 再返回，得到的结果就是一个 Promise 对象
}
const gen = asyncReadFile(); // 因为得到的结果是一个 Promise 对象，所以这里我们就可以使用 then 来接收成功
// gen.then(data => console.log(data.toString()));



/**************************************************
  再看一下基本的使用方法
**************************************************/
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms); // await 当使用在 Promise 前面时，await 等待 Promise 完成，并返回 Promise 结果
  console.log(value); // 过了 5 秒后打印出来
}

asyncPrint('hello world', 5000);
