// debugger;

//   function square(v) {
//     return v * v;
//   };

// var a = 10;

// first class functions

// a programming language is said to have first-class functions if it treats functions like any other first-class citizen. This means that functions can be treated just like variables, numbers, or other data types. They can be:

// function that can be rturned by anothe function, set a varible ,passes as args, or stoed to data structures

// IIFE -Immediately Invoked Function Expression

(function square(v) {
  console.log(v * v);
})(5);

// function scoped function

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(`i`, i);
//   }, i * 1000);
// }

// // output -- 5 5 5 5 5

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(`i`, i);
//   }, i * 1000);
// }

// output -- 0 1 2 3 4

// temporal deadzone

// let d
// const c = 10
// console.log(`c`, c);

// function hos(){
//     console.log(`constant`, c);
//     var c= 20
// }

// hos()

// params vs

function fun(params) {
  // params
  console.log(`params`, params);
}

fun("Arguments"); // arguments

//rest and spread

function mult(...nums) { //rest
  console.log(nums[0] * nums[1]);
}

var arr = [2, 3];

mult(...arr); //spread



// this is arrow and comman func

let users = {
    username:"johanson",
    rc1: () =>{
        console.log("this is this:" + this.username);
    },
    rc2(){
        console.log("this is this2:" + this.username);
    }
}

users.rc1();
users.rc2();