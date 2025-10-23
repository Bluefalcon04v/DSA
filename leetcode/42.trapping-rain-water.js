/*
42. Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

function trap(nums) {
  let maxL = [];
  let tempL = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tempL < nums[i]) {
      tempL = nums[i];
      maxL.push(tempL);
    } else {
      maxL.push(tempL);
    }
  }

  let maxR = [];
  let tempR = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (tempR < nums[i]) {
      tempR = nums[i];
      maxR.push(tempR);
    } else {
      maxR.push(tempR);
    }
  }

  maxR.reverse();

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = Math.min(maxR[i], maxL[i]) - nums[i];
  }

  let totalWaterCollected = 0;
  for (let i = 0; i < ans.length; i++) {
    totalWaterCollected = totalWaterCollected + ans[i];
  }

  return totalWaterCollected;
}

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
