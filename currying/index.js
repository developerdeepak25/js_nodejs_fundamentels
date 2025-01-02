// currying allows you to transform a function that takes multiple arguments into a series of functions that each take a single argument.

//currying example

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}
console.log(f(5)(6));

// Q infinite Currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(6)(8)(6)());

// in currying each nested func takes a single argument only thats what  makes it currying,  num of func depends on num of args

// question - Curying vs paritial appl

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

//currying is not happeing in this functo0n it is partial appp
const x = sum(10);
console.log(x(5, 6));
console.log(sum(10)(5, 6));

// manipulating DOM

function updarteElem(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}


const updateHeader = updarteElem("heading");

updateHeader("Currying heading")

