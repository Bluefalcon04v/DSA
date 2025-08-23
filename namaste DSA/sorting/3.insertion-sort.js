function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let p = i - 1;
    let curr = nums[i];
    while (nums[p] > curr && p >= 0) {
      nums[p + 1] = nums[p];
      p--;
    }
    nums[p + 1] = curr;
  }
  return nums;
}

// console.log(insertionSort([3, 4, 8, 2, 1]));
