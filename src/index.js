// function taskA() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(100);
//       // reject("와~");
//     }, 1000);
//   });
// }

// function taskB(r) {
//   console.log(r);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(200);
//       // reject("와~");
//     }, 1000);
//   });
// }

// const p = taskA();
// const p2 = taskB();

// Promise.all([p, p2]).then(result => console.log(result));

// p.then(result => taskB(result))
//   .then(r => console.log(r))
//   .catch(err => console.log(err));

// function* foo() {
//   let num = 0;

//   yield* [1, 2, 3];

//   while (true) {
//     const r = yield ++num;
//     console.log(r);
//   }
// }

// const result = foo();
// console.log(result.next());
// console.log(result.next("A"));
// console.log(result.next("B"));

function foo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
}

function* main() {
  const result = yield foo(); //61
  console.log("B", result);
}

const it = main();
it.next().value.then(r => it.next(r));
