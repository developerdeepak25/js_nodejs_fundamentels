a = 30
console.log(a);
//  will get 30 here it it was var but let , const will be undefined but in dead zone before line of initialization
var a = 20


// function - 

myFun();

var myFun = function () { // this will be hostiste as undefined that we knoe
  console.log("First");
};

myFun();

function myFun() { // this will aslo hosit but not as undefined as functions are hosited with body
  console.log("Second");
}

myFun();


// functions local context 
// variable = 10;

// (() => {
//   foo = 100;
//   console.log(variable);
//   var foo = 100;
//   variable = 20;
//   console.log(variable);
// })();

// console.log(foo); // will give error as functions variables are cleaned up with funtion only and are specific to it only
// console.log(variable);
// var variable = 30;


// gloval vs local varuables
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }


// // arrow function scrope and this
// const value  = 60
// const obj = {
//   value: 10,
//   arrowFunction: () => {
//     console.log("Arrow:", this.value);
//   },
// };

// obj.arrowFunction(); // Output: Arrow: 10

// `this` in node and in general
const obj = {
  name: 'John',
  greet: function() {
    const inner = () => {
      console.log(this.name);  // 'this' refers to the 'obj' because the arrow function inherits 'this' from its enclosing function.
    };
    inner();
  }
};
obj.greet();  // Output: John
