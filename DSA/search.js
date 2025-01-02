console.log("lolo");
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (elem === arr[mid]) {
      return mid;
    } else if (elem < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 14));



//  findth kth missing element form number sequence -> -1,2,3,4,5,6,7,8,9,10,11 .....
function findKthMissingElement(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
}
console.log(findKthMissingElement([2, 3, 4, 7, 11], 5));


// / maximum count of positive and negative numbers whch ever is greater return


function upperBound (nums){
    let low = 0

    let high  = nums.length - 1

    while (low < high){
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] < 0){
            low = mid
        }else{
            high = mid - 1;
        }
    }
    return nums[0] >= 0 ? 0 : low + 1  
}
function lowerBound (nums){
    let low = 0

    let high  = nums.length - 1

    while (low < high){
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > 0){
            high = mid
        }else{
            low = mid + 1;
        }
    }
    return nums[nums.length - 1 ] <= 0 ? 0 : nums.length - low
}


function maximumCount(nums){
 return Math.max(upperBound(nums), lowerBound(nums))
}

console.log(maximumCount([-2,-1,-1,0,0,3,5,4,6]));