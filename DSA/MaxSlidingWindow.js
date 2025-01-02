maxSlidingWindowOptimal = (nums, k) => {
  let result = [];
  let deque = [];

  for (let i = 0; i < nums.length; i++) {
    // check if i deque first elem falls in the window
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    //   checking if i is greater than deque element
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i])
      deque.shift();

    // 
    deque.push(i);

    // checking if windiw is created inital one
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};

console.log(maxSlidingWindowOptimal([1, 3, -1, 3, 5, 3, 6, 7],3));
