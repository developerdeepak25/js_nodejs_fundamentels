// Question 1 - what is call?

// In JavaScript, the call() method is used to invoke a function with a specified this value and optional arguments.

// var obj = { name: "piyuash" };
// function sayHello(age) {
//   return "Hello " + this.name + " is " + age;
// }

// console.log(sayHello.call(obj, 24));

// Question 2 - what is apply?
// same as call but takes arguments in the array instead

// var obj = { name: "piyuash" };
// function sayHello(age, proff) {
//   return "Hello " + this.name + " is " + age + " and is an " + proff;
// }

// console.log(sayHello.apply(obj, [24, "Software Engineer"]));

// Question 3 - what is bind?
// it works similar but  returns a function binded  with the specified `this`

var obj = { name: "piyuash" };
function sayHello(age, proff) {
  return "Hello " + this.name + " is " + age + " and is an " + proff;
}

const bindFunc = sayHello.bind(obj);

console.log(bindFunc(24, "Software Engineer"));
// console.log(bindFunc(45, "SDE-3"));

// question 4 - Output Based Question

const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 24)); // output -Piyush is 24
console.log(sayHi.bind(person, 24)); // ths returns a function

// Question 5 - call with function inside object

// const age = 10;
// var person1 = {
//   name: "Piyush",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// console.log(person1.getAge.call(person2)); // output  - 24
// will get same reult for other 2 methods

// Question 6- ehat is the output

// var status = " 😎";
// setTimeout(() => {
//   const status = "😍 ";
//   const data = {
//     status: "🥑",
//     getstatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getstatus()); //  🥑
//   console.log(data.getstatus.call(this)); // 😎
// }, 0);

// Question 7 Call printAnima1s such that it prints all animals in object

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i);
// }

// Question 8 - Append an array to another array wihtout creating a new array

const array = ["a", "b"];
const element = [0, 1, 2];

array.push.apply(array, element);

console.log(array);

// Question 9 using apply to enhance Built-in functions
// Find min/max number in an array

const numbers = [5, 6, 2, 3, 7];
console.log(Math.max.apply(null, numbers));

// Question 10 - Bound function

function f(){
  console.log(this);
}

let user = {
  g : f.bind(null)
}

user.g() // is called with no specfic context so it will inherit global context

// Question 11 - Bind Chaining

function f() {
  console.log(this.name);
}

let ff = f.bind({ name: "john" }).bind({ name: "anna" });

ff(); // func can be binded(though bind() method) with a `this` only once

// Question 12 - Fix the line at checkPass() call to make code work properly

// function checkPass(success, failed) {
//   let password = prompt("Password", "");
//   if (password == "coder") success();
//   else failed();
// }

// let user1 = {
//   name: "Piyush Agrawal",

//   loginSuccessful() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPass(user1.loginSuccessful, user1.loginFailed); //-problem
// checkPass(user1.loginSuccessful.bind(user1), user1.loginFailed.bind(user1)); // fix

// Question 13 - Partial application for login function

// function checkPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "Roadside") ok();
//   else fail();
// }

// let user2 = {
//   name: "devanand",
//   login(res) {
//     console.log(this.name + (res ? " login successful" : " login failed"));
//   },
// };

// checkPassword(user2.login.bind(user2,true), user2.login.bind(user2,false))

// Question 14 - Explicit Binding with Arrow Function

const age = 10;

var person1 = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };

person1.getAgeArrow.call(person2); // ? undefined
// cant apply context on arrow function it only inherits `this`. call,apply, bind changes `this` also arrow function dont have `this` to begin with
person1.getAge.call(person2); // 24



// CALL, BIND, and APPLY POLYFILL

// Question 15 - Polyfill for Call Method

let car1 = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(curr, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${curr}${price}`
  );
}

// purchaseCar.call(car1,'€', 500000)

// polyfill for Call Method

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "its not a function");
  }
  // console.log(this);
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, "€", 500000);
// console.log(car1);

// polyfill for Apply Method

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "its not a function");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  // console.log(this);
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car1, ["€", 500000]);


// polyfill for BIND Method


Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args,...newArgs);
  }

}

// const newFunc = purchaseCar.myBind(car1, "€", 500000);
const newFunc = purchaseCar.myBind(car1);
newFunc( "€", 500000)