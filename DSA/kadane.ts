function maxSubArray(arr: number[]) {
  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubArray([5, -2, 6, -2, 1, 1]));
