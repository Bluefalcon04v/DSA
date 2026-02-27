function leftOcc(nums, k) {
  let l = 0;
  let r = nums.length - 1;
  let ans = -1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === k) {
      ans = m;
      r = m - 1;
    } else if (nums[m] > k) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

function rightOcc(nums, k) {
  let l = 0;
  let r = nums.length - 1;
  let ans = -1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === k) {
      ans = m;
      l = m + 1;
    } else if (nums[m] < k) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ans;
}

function countOcc(nums, k) {
  let left = leftOcc(nums, k);
  let right = rightOcc(nums, k);
  return right - left + 1;
}

console.log(countOcc([2, 2, 3, 3, 3, 3, 4], 4));
