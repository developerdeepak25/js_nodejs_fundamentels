var twoSum = function (nums, target) {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  // This return will never be reached because the problem guarantees a solution
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// twoSum([2, 7, 11, 15], 9);
// console.log(twoSum([2, 5, 5, 11], 10));

//   interget to roman

function intToRoman(num) {
  // Define a mapping of integers to their corresponding Roman numerals
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  // Loop through the romanMap array
  for (let i = 0; i < romanMap.length; i++) {
    // While the current value can be subtracted from num
    while (num >= romanMap[i].value) {
      // Append the corresponding numeral to the result
      result += romanMap[i].numeral;
      // Subtract the value from num
      num -= romanMap[i].value;
    }
  }

  return result;
}

// Example usage
// console.log(intToRoman(58)); // Output: 'LVIII'
// console.log(intToRoman(1994)); // Output: 'MCMXCIV'
// console.log(intToRoman(2023)); // Output: 'MMXXIII'

var longestCommonPrefix = function (arr) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];

  let i = 1;
  let prf = arr[0];
  while (i < arr.length) {
    if (!arr[i].startsWith(prf)) {
      prf = prf.slice(0, -1);
    } else {
      i++;
    }
  }
  return prf;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
); // Output: "inters"
console.log(longestCommonPrefix(["throne", "throne"])); // Output: "throne"
console.log(longestCommonPrefix([])); // Output: ""
console.log(longestCommonPrefix(["single"])); // Output: "single"

// var isValid = function(s) {
//     let obj={'(':')','{':'}','[':']'}
//     let stack=[]
//     for(let char of s){
//         if(obj[char]) stack.push(char)
//         else if(obj[stack.pop()]!==char) return false
//     }
//     return stack.length==0
// };

var isValid = function (s) {
  const stack = [];
  let bracMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (bracMap[char]) {
      stack.push(char);
    } else if (bracMap[stack.pop()] !== char) return false;
  }
  return stack.length === 0;
};

console.log(isValid("()"));

// \ fabonacci with recursion
function fibonacci(n) {
  // Base cases
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 6 ->
//  5 ->     4 ->
//  4 ->  3->           3-> 2->
// 3-> 2->       2->  1->1        2->   1->1    1->1 0->1
// 2-> 1->1    1->1   0->1      1->1  0->1        1->1 0->1
//  1->1 0->1
console.log(fibonacci(7));

// const isAnagram = (s, t) => {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   return s === t;
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  
  const obj1 = {}
  const obj2 = {}
  for(let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1
    obj2[t[i]] = (obj2[t[i]] || 0) + 1
  }
  for(const key in obj1) {
    if(obj1[key]!== obj2[key]) return false
    return true
  }
};

console.log(isAnagram("anagram", "nagaram"));




// Best Time to Buy and Sell Stock


var maxProfit = function (prices) {   // greedy algo is used
  var minStockPrice = prices[0]
  var maxProfit = 0
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPrice) {
      minStockPrice = prices[i]
    }
    maxProfit = Math.max(maxProfit, prices[i] - minStockPrice)
  }
  return maxProfit
};

console.log(maxProfit([7,2,5,3,6,1]));
