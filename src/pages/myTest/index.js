import React,{useCallback, useEffect}from 'react';
import { Carousel } from 'antd';

import styles from '../index.less';

const data=['HCM第一帅:郭永恒','HCM第二帅:黄帅','HCM第三帅:苏忠宝','HCM第四帅:尚未册封'];

const list = data.map((item,index)=>{
  return(
    <div key={index}>
      <h3>{item}</h3>
    </div>
  )
});

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done','done2');
//   });
// }

// timeout(3000).then((value) => {
//   console.log(value);
// });

// !如果 不用catch去接受，那么内部就会报错
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// // Error: fail

// ! 先打印 2再打印 1，因为resolve会在本轮时间循环末尾执行，总是晚于本轮循环的同步任务；
// new Promise((resolve, reject) => {
//   // resolve(1); // return  resolve(1)
//   return resolve(1);
//   console.log(2);
//   // reject(new Error('fail')); //! reject 和 resolve 只会执行一个
// }).then(r => {
//   console.log(r);
// }).catch(error =>
//   console.log(error)
// );
// // 2
// // 1

// ! .then方法返回的是一个新的Promise
// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   console.log('everything is great');
// }).catch(error=>console.log(error));

// setTimeout(() => { console.log(123) }, 2000);
// // Uncaught (in promise) ReferenceError: x is not defined
// // 123

// ! catch后依然会执行，因为catch 返回的是一个新的promise
// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing()
// .catch(function(error) {
//   console.log('oh no', error);
// })
// .then(function() {
//   console.log('carry on');
// });
// // oh no [ReferenceError: x is not defined]
// // carry on

// !关于promise的报错
// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   return someOtherAsyncThing();
// }).catch(function(error) {
//   console.log('oh no', error);
//   // 下面一行会报错，因为 y 没有声明
//   y + 2;
// }).then(function() {
//   console.log('carry on');
// });
// oh no [ReferenceError: x is not defined]

// Promise.prototype.finally = function (callback) {
//   let P = this.constructor;
//   return this.then(
//     value  => P.resolve(callback().then(() => value),
//     reason => P.resolve(callback()).then(() => { throw reason })
//   );
// };

// const p1 = new Promise((resolve, reject) => {
//   resolve('hellox');
// })
// .then(result => result)
// .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了2');
// })
// .then(result => result)
// .catch(e => e);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));
// // ["hello", Error: 报错了]


export default function() {
  useEffect(
    ()=>{

    }
  )

  return (
    <div className={styles.normal}>
      <div className={styles.container}>排名</div>
      <Carousel autoplay>
       {list}
      </Carousel>
    </div>
  );
}
