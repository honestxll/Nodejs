function* foo () {
  console.log('test');
  yield console.log('test2');
  yield console.log('test3');
  console.log(`data: ${yield}`);
  yield console.log('test4');
  console.log(`${yield}`);
  console.log(`${yield}`);
}

// 这里首先要知道 console.log 返回的结果是 undefined
const fooObj = foo();
console.log(fooObj.next()); // console.log('test'); console.log('test2'); { value: undefined, done: false }
console.log(fooObj.next('aaa')); // yield console.log('test2') = 'aaa'; console.log('test3'); { value: undefined, done: false}
console.log(fooObj.next('bbb'));
// yield console.log('test3') = 'bbb'; ${ yield undefined } == 其实内部就是 yield undefined { value: undefined, done: false }
console.log(fooObj.next('ccc')); // console.log('data: ccc'); console.log('test4'); { value: undefined, done: false }
console.log(fooObj.next()); // ${ yield undefined } { value: defefined, done: false }
console.log(fooObj.next('ddd')); // console.log('ddd'); { value: unfefined, done: false }
console.log(fooObj.next('eee')); // console.log('eee'); { value: undefined, done: true }
