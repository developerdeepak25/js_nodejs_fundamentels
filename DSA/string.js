const string = new String("this that this");

//  string with template literal
const string2 = `this in inside template  literal`;

// we can long withour () with ``
var str = "Hello the Big World.";
console.log`hello ${str} how are  ${"you"}`;

function test(string, surname, person) {
  console.log(string, surname, person);
}
let parm2 = "aashrmiya";
let parm3 = "deepak ji";
test`this that ${parm2} and ${parm3}`;

// charCode

console.log(str.charCodeAt(0)); // getting char code
console.log(String.fromCharCode(76)); //getiing character from charCode

// Q tranucate a strinf return only upto a specifeied max lenght and then add  .. for rest(only if lenght exced max len).

function tranucate(str, maxLen) {
  if (str.length > maxLen) {
    return str.slice(0, maxLen) + "...";
  }
  return str;
}

console.log(tranucate("this that those them", 9));

//  isPlaindrone

function isPlaindrone(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

console.log(isPlaindrone(12321));

//  Q hamminf distance (differnec between corresponding bits)

function hammingDistance(x, y) {

    x=x.toString(2)
    y=y.toString(2)

    if (x.length<y.length) {
        while (x.length !==y.length)  x = '0'+ x 
    }else{
        while (y.length!==x.length)  y = '0'+ y
    }

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
return distance;
}
console.log(hammingDistance(2,9));
