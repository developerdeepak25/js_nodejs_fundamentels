const bubbleSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;

};


console.log(bubbleSort([45,34,7,2,9]));



//  selection sort 


function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the minimum element is the first element of the unsorted part
    let minIndex = i;

    // Find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);


function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    // Store the current element
    let key = array[i];
    // Initialize j to the index before i
    let j = i - 1;

    // Move elements of array[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    // Place the key at its correct position
    array[j + 1] = key;
  }

  return array;
}

// Example usage:
const arr1 = [64, 25, 12, 22, 11];
const sortedArr1 = insertionSort(arr1);
console.log("Sorted array:", sortedArr1);





// merge sort

function mergeSort(arr){
  if(arr.length === 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
 const left = arr.slice(0,mid)
 const right = arr.slice(mid)
 console.log('left',left);
 console.log('right',right);
 return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  const sortedArray = []
  while (left.length && right.length) {
     if (left[0] > right[0]) {
      sortedArray.push(right.shift())      
      }   else{
       sortedArray.push(left.shift())      

     }
  }
  // console.log("merge", [...sortedArray, ...left, ...right]);
  return [...sortedArray,...left, ...right]
}
console.log(
'merge sort',
  mergeSort([5,63,8,2,4,3,89,6,1])
);







// ## Quick Sort

function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot,...quickSort(right)]
}


