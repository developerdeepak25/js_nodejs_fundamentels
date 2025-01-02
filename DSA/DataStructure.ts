// Questions

// 1. second largest element in the array.   elem should de distinct

// essay approch can be make a set sort it server the second largert with the if conditon if lenght is 1 after set

// optimized solution

// [12,2,35,34, 35,10,13]

const secondLargest = (arr: number[]) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(secondLargest([12, 2, 35, 34, 35, 10, 13]));

// rotate array by k

function rotateArray(nums: any[], k: number) {
  const size = nums.length;
  if (k > size) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, k);
  nums.unshift(...rotated);
  return nums;
}

console.log(rotateArray([12, 2, 35, 34, 35, 10, 13],3));
// optimized solution

function rotate(arr: any[], start: number, end: number) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  // return arr;
}

function rotateArrayOptimized(arr:any[], k:number) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }

  rotate(arr, 0, size - 1);
  rotate(arr, 0, k - 1);
  rotate(arr, k, size - 1);

  return arr;
}
console.log(rotateArrayOptimized([12, 2, 35, 34, 35, 10, 13], 3));



// Question - remoce duplicates from a array

function removeDuplicates(arr:any[]){
    
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i+1,1)
            i--
        }
    }
    return arr;
}



console.log(removeDuplicates([1,2,3,3,4,4,4,5,5,5]));




function removeDuplicatesOptimized(arr: any[]){
    if (arr.length === 0) return 0
    let i = 0;
    
    for (let j = 1; j < arr.length; j++) {
        if (arr[i]!== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(removeDuplicatesOptimized([1,2,3,3,4,4,4,5,5,5]));