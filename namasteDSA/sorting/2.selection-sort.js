function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
  }
  return nums;
}

// console.log(selectionSort([4, 2, 1, 6]));
