/**************************************************
  Generator 是生成迭代器的一种方法，我们可以叫它生成器
  它是 ES6 提供的一种异步编程解决方案，不是很容易懂
  yield 表达式就是暂停标志
  如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止
  每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行
**************************************************/

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
  yield 'test'; // 这里的不会执行
}
let hw = helloWorldGenerator();

console.log(hw.next(), hw.next(), hw.next(), hw.next());


/**************************************************
 上面的例子可能比较好理解，下面的例子你可能就看不明白了
**************************************************/

function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

// 按照正常我们的理解，每一次都是返回 yield 前的内容
// 当第二次执行 next 时候，传了 12，我们应该会理解成传了一个 y 为 12，返回 4 之类
// 其实也这么理解也说不通
// 真正的原因是因为每次传参的时候，都会把上一个 yield 表达式设置成我们传的值
// 第一次执行的时候程序走到了 yield 6，这个时候 x=5，返回了一个 6 出来
// 第二次的时候，程序把 yield (x + 1) 的值设置成了 12，所以 y 就成了 24，返回 24/3=8
// 第三次的时候，程序再把 yield (y/3)  的值设置成了 13，所以 z 就成了 13，返回 5 + 24 + 13 = 42.
// 综合上面说的，第一次执行 next 的时候，传递的值就是上一个表达式的返回值
// 也就是说，next()的参数会被赋值给 yield语句 --- 理解这一点很重要
// 所以在第一次使用next方法时，传递参数是无效的。


// 再看一下下面的内容
function* bar() {
  console.log('one');
  console.log('two');
  console.log('three');
  yield console.log('test');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}
let barObj = bar();
console.log(barObj.next(), barObj.next('a'), barObj.next('b'), barObj.next());

/**
 * 上面的代码应该这么来读
 * 首先要明白 console.log 的返回值是 undefined
 * next 1. console.log('one')...console.log('test'); return { value: unfefined, done: false }
 * next 2. yield console.log('test') = 'a'  ${ yield undefined } 写括号是为了方便看，其实没有括号 return { value: undefined, done: false }
 * next 3. console.log(`1. ${'b'}`) return { value: undefined, done: false }
 * next 4. console.log(`2. ${ undefined }`); return { value: 'result', done: true }
 */
