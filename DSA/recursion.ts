//  multiply arry elem with recursion

function multiply(arr: number[]): number {
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
  }
}

// console.log(multiply([3, 4,2,2]));

// most asked questtions in recursion

// factorial

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(4));

// range of numbers

function rangeOfNumbers(start: number, end: number): number[] {
  if (start > end) {
    return [];
  } else {
    const numbers: number[] = rangeOfNumbers(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 6));

function isPalindrone(number: string | number) {
  let str = number.toString();

  function checkIsPalindrone(str: string, start: number, end: number) {
    if (start >= end) {
      return true;
    }
    if (str[start] !== str[end]) {
      return false;
    }
    return checkIsPalindrone(str, start + 1, end - 1);
  }
  return checkIsPalindrone(str, 0, str.length - 1);
}

console.log(isPalindrone(12321));

// fibonachi

function fibo(n: number): number {
  if (n <= 1) return n;
  
  return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6));