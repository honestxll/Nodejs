/******************************
 看看 Promise 怎么使用
******************************/

// 一但创建了 Promise 对象，它就会立即执行
// 它有两个参数，成功的回调和失败的回调
let promise = new Promise((resolve, reject) => {
  console.log('Promise usage');
  // 这两个只会执行一个
  // resolve('成功');
  reject('失败');
});

// 用 then 来接收成功和失败，成功的时候走第一个函数，失败的时候走第二个函数
// 你也可以像下面那样写
// promise.then((val) => {
//   console.log(`the result is: ${val}`);
// }, () => {
//   console.log('失败了');
// })

// 如果不想把回调写在一起，可以在 then 里面专门的接收成功
// 另外再写一个 catch 专门来接收失败
promise
  .then((val) => {
    console.log(`the result is: ${val}`);
  })
  .catch((val) => {
    console.log(`the result is ${val}`);
  })
;




// 如果是抛出的异常也会走到 catch 里面执行
new Promise((resolve, reject) => {
  throw new Error('error');
}).then(() => {

}).catch((e) => {
  // console.log('the error is: ', e);
})




// 如果你不想让 Promise 这个构造函数立即执行的话
// 可以把它放在一个函数内，用的时候调用函数，像下面这样
const chef = (foods) => (
  new Promise((resolve, reject) => {
    resolve(foods);
  })
)
chef(['🍠', '🍳', '🍅'])
  .then(foods => console.log(...foods))
  .catch(error => console.log(error));
// 在 Promise 中本来有一个 finally 方法不管成功还是失败都可以执行
// 但是因为 node 还不支持所以暂时不能使用，可以在 chorme 上调试




/***************************************
 再看一下 Promise all
 all 里面放的是由许多 Promise 组成的一个数组
***************************************/

const foodsArr = [
  ['🍌', '🍎', '🍏'],
  ['🌽', '🍹'],
  ['🍋', '🍫'],
];
const promises = foodsArr.map(food => chef(food));
Promise
  .all(promises)
  .then((result) => {
    console.log('全部执行成功，所有返回的结果都在 result 里面');
    result.map(item=>console.log(...item));
  })
  .catch(() => console.log('发现执行失败，并且没有接收'))
;



// 再看一下 race 方法，只要有一个改变，结果就会改变，感觉这个没什么用
Promise
  .race(promises)
  .then((result) => {
    console.log('有一个成功了');
    result.map(item=>console.log(...item));
  })
  .catch(() => console.log('发现执行失败，并且没有接收'))
;




/**************************************************
 有时需要将现有对象转为 Promise 对象，Promise.resolve
 reject 也是同理
**************************************************/
let chef2 = () => {
  return Promise.resolve((foods) => {
    console.log(...foods);
  })
}
chef2()
  .then(cb => cb(['🍎', '🍐', '🍑']))
  .catch(err => console.log(err))
;
