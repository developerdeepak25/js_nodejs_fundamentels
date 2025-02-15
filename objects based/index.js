// const user = {
//     name: "John",
//     age: 25,
// }

// delete user.age;

// console.log(`user`, user);

// delete keyword is only applicable for a object

// adding key with spaces

// const u = {
//     name: 'John',
//     age: 25,
//     "like this" : true,
// }

// console.log(u["like this"]);

// dynamic key values to obj

const property = "firstName";
const name = "deepak ji";

const d = {
  [property]: name,
};
console.log(d);

// Getting all keys

// const user = {
//   name: "John",
//   age: 25,
//   something: true,
// };

// for (const key in user) {
//   console.log(key);
// }

// question1 - what's the Output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);

// question2 - create a func that multiple numeric keys by two

let nums = {
  a: 100,
  title: "my nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

console.log(nums);

// Q3 - what will be the output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // output - 456
// because a obj will not be converted to strin insted it will become '[object object]' for b and c hence putting value in the same key
// - since we put 456 in '[object object]' al last it will be the value

//  quesiot4 JSON. Stringy fy and parse
// stringify will convert object to string
//parse will convert string to object

const user = {
  name: "John",
  age: 25,
};

const strObj = JSON.stringify(user);

console.log(strObj);

const j = JSON.parse(strObj);

console.log(j);

// Ques 5 - output

console.log([..."Lydia"]); //output - [ 'L', 'y', 'd', 'i', 'a' ]

// question 7 - whata will be the  output

// const settings = {
//   username: "John",
//   level: 19,
//   health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// this will strigfy the provided value and return them as a string

// console.log(data); //output - {"level":19,"health":90}

// Quesition 8 what the output

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// output -20
//        NaN

// renaming the desttructed value

let user1 = {
  name: "tonny",
  age: 25,
  fullName: {
    first: "John",
    last: "Doe",
  },
};

const { name: username } = user1;
console.log("🚀 ~ username:", username);

// destructuring objeect inside obj

const {
  fullName: { first },
} = user1;

console.log("🚀 ~ first:", first);

// Q 10 -  output based

// function getItems(fruitList, ...args,favoriteFruit) // rest operaton can only be places as lsat args

function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItems(["banana", "apple"], "peer", "orange"));

//  questions 11 what the output

let cc = { greeting: "Hey!" };
let dd;

dd = cc; // her copying is not happening refernce is happening
cc.greeting = "hello world";
console.log(dd.greeting);

// Q 13

let person = { name: "Lydia" };
const members = [person];
person = null; // not modifiing the vales of obj here so ouptu - [ { name: 'Lydia' } ]
// person.name = null; //  modifiing the vales of obj here so ouptu - [ { name: null } ]
console.log(members);

// question 14  what will be the output

const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40


// question 15 what's the outpur

function changeAgeAndReference(person){
    person.age = 25;
    // here object is modified as person var  contains ref to the passed obj
    person ={   
        name: 'john',
        age: 50
    }
    //here another obj ref is passed to the personn variable, also this doe not kills the passed object as persin contains ref of memory not the obj itself
    return person;
}

const personObj1 ={
    name: 'alex',
    age: 15
}

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);

// Q 16 shallown copy
// copyinh obj with a object as property can create shallow copy in hallow copy both object properties point to the same location

// Question 17 - How to deep copy / clone an object ?
// const objClone = JSON.parse(JSON.stringify(user));

let user4 ={
    name: "John",
    age: 25,
}

// deep copy 3 methods
// const objClone = Object.assign({},user)
// const objClone = JSON.parse(JSON.stringify(user));
const objClone = {...user4}

objClone.name = 'Tonny master'
console.log('orginal',user,'clone' ,objClone);

// * CUstom logic for deep copy
const deepObject ={
  a:'a',
  o1:{
    b:'b',
    o2:{
      c:'c'
    },
    a2: [1,2,3]
  },
  arr1: [1,2,3]
} // for this shallow copy wolud not work

// logic for deep copy

const deepCopy = (obj) =>{
  if (typeof obj !== 'object' || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
  } 
  return copy;
}

const deepObjectCopy = deepCopy(deepObject);
deepObjectCopy.o1.o2.c = 'd'
console.log("orginal", deepObject.o1.o2.c);
console.log("deep", deepObjectCopy.o1.o2.c);

