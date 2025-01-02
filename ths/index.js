// class User {
//     g= 12
//   constructor(n) {
//     this.name = n;
//   }
//   getName() {
//     console.log(this.name, this.g);
//   }
// }

// const user = new User('piyush');
// user.getName()

// what `this` takes inside arrow function
// const obj = {
//   name: "ppp",
//   user: {
//     name: "Piyush",
//     age: 24,
//     getDetai1s() {
//       const nestedArrow = () => console.log(this.name);
//       nestedArrow;
//     },
//     //   func: function () {
//     arrow: () => console.log("this", this.name),
//     // arrow();
//     //   },
//   },
// };
// console.log(obj.user.arrow());

// arrow function does not hav their own this they borrow it

// let objobj ={
//     aa:a,
//     b:45
// }
// console.log(objobj.aa);

let user1 = {
  name: "Piyush",
  age: 24,
  func() {
    arrow = () => console.log("this", this.name);
    arrow();
  },
};

user1.func();

// Lexical Scope: Lexical scope in JavaScript means that the availability of variables and functions is determined by where they are written in the code. When you define a function, it retains access to the variables that were available in the scope where it was defined, regardless of where it's called from.

//  Question 1 - What is the Output?

const user = {
  firstName: "John",
  getName() {
    const firstName = "johnathon";
    return this.firstName;
  },
};

console.log(user.getName());

// Question 2 What is the result of accessing its ref? Why?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// let use = makeUser();

// console.log(use.ref);

// Question 3 - What is the Output?

const user3 = {
  name: "John cena",
  logMessage() {
    console.log(this.name);
  },
};

// here user3.logMessage is given as a callback so we will not get name in console
// setTimeout(user3.logMessage, 1000); // undefined

// setTimeout(function () {
//   user3.logMessage();
// }, 1000);




// possible solution using bind or passing uer3.logMessage in another function
// setTimeout(user3.logMessage.bind(user3), 1000);

// Question 4 - What is the Output?
const user4 = {
  name: "Piyush",

  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user4.greet()); // What is logged?
console.log(user4.farewell()); // What is logged?

// / Question 5 Create an object calculator

// let calculator = {
//   read() {
//     // this.a = parseInt(prompt("a =", 0));
//     // this.b = parseInt(prompt("b =", 0));
//     // or
//     this.a = +prompt("a =", 0);
//     this.b = +prompt("b =", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// Q6 -  what will be the output?

var length = 4;

function callback() {
  console.log(this.length);
}

// const obj3 = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// obj3.method(callback);

//  further twicked

const obj3 = {
  length: 5,
  method() {
    //  arguments is a array(an object) as we know which also have alengt prop so we now know whar will be the an -- 3
    arguments[0]();
  },
};

obj3.method(callback, 2, 3); // output --3

// Question 7: Implement this code
// this code - const result = calc.add(10).mul(5).sub(30).add(10);


const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  sub(a) {
    this.total -= a;
    return this;
  },
  mul(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).mul(5).sub(30).add(10);
console.log(result.total);
