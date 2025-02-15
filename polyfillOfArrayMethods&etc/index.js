// Map polyfill

// Array.map((elem,i,arr)=>{})

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//ours

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let myMapRes = arr.myMap((elem, i) => {
   return arr[i] + 1;
});

console.log(`myMapRes`, myMapRes);

// filter polyfill

// let orginalFilter = arr.filter((elem,i,arr)=>{return elem>5 })
// console.log(`orginalFilter`, orginalFilter);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

//ours

// let ourFilter = arr.myFilter((elem, i, arr) => {
//   return elem > 5;
// });
// console.log(`ourFilter`, ourFilter);

// reduce polyfill

// let orginalreduce = arr.reduce((acc,elem,i,arr)=>{return acc+elem },0)
// console.log(`orginalreduce`, orginalreduce);

Array.prototype.myReduce = function (cb, initial) {
  var acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

// let myReduce = arr.myReduce((acc, elem, i, arr) => {
//   return acc + elem;
// },0);
// console.log(`myReduce`, myReduce);
