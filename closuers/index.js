// closures

// function outer(){
//     let name =  'birla'
//     var inner = function(){
//         console.log(name);
//     }
//     inner();
// }

// outer()

// a closure gives the inner function access to the outer function scope. in js closures are created wvwertime a function is created in js

// retured funcion in closures

// function outer() {
//   let name = "birla";
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }

// var myFunc = outer();
// myFunc();

// clouseure scope chaining inside function also  has the acces of th outer scope of wrapper funcition, it will hace scope of every function wrapping it

// var username = "janwar";
// function a() {
//   let name = "birla";
//   return function () {
//     return function () {
//       return function () {
//         console.log(name, username);
//       };
//     };
//   };
// }

// var myFunc = a()()(); // this is just to run internal func in 1 step
// myFunc();

// Q what will be the console

// let count = 0;
// function b() {
//   if (count === 0) {
//     let count = 1; // hadowing
//     console.log(`count`, count);
//   }
//   console.log(count);
// }

// b();

// Q ques time optimization with closure

// normal code with high time
// function find(index) {
//   let a = [];
//   for (var i = 0; i < 10000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(2)
// console.timeEnd("6");
// console.time("12000");
// find(400)
// console.timeEnd("12000");


// with closure
// function find() {
//   let a = [];
//   for (var i = 0; i < 10000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();

// console.time("70");
// closure(600);
// console.timeEnd("70");
// console.time("110");
// closure(999999);
// console.timeEnd("110");
// console.log('----');


// Q settimeout output

// function a() {
//   for (var i = 0; i < 3; i++) { // here var has functional scopr and let ha block scope
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a()

// can use var with clouse

// function a2() {
//   for (var i = 0; i < 3; i++) {
//     (function (j) {
//       // Immediately Invoked Function Expression (IIFE) to create a closure
//       setTimeout(function log() {
//         console.log(j); // Access the captured value of j
//       }, j * 1000);
//     })(i); // Pass the current value of i to the IIFE
//   }
// }

// a2();

// Q private counter with closure

function counter() {
  var count = 0;

  function add(inc) {
    count += inc;
  }
  function retrive() {
    return count;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(10);
c.add(5);

console.log(c.retrive());

// module patterm  in js(closure)

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
// Module.privateMethod()

// Q make the code run only once

// let view;

// function callWrappper(){
//     let called = 0;

//     return function(){
//         if(called === 0){
//             console.log('called once');
//         }else{
//             console.log('already called');
//         }
//         called++;
//     }
// }

// let callOnce = callWrappper()

// callOnce()
// callOnce()
// callOnce()

// generallixed version || once function polyfill

function once(func, context) {
  let ran;
  return function () {
    if (func) {
    //   console.log(this);
      ran = func.apply(context || this, arguments); // the reason to use apply is to give args to the function and `this` is mendatory param of apply()
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
