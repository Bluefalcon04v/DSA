/*
3000. Maximum Area of Longest Diagonal Rectangle
You are given a 2D 0-indexed integer array dimensions.
For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.
Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.

Example 1:
Input: dimensions = [[9,3],[8,6]]
Output: 48
Explanation: 
For index = 0, length = 9 and width = 3. Diagonal length = sqrt(9 * 9 + 3 * 3) = sqrt(90) ≈ 9.487.
For index = 1, length = 8 and width = 6. Diagonal length = sqrt(8 * 8 + 6 * 6) = sqrt(100) = 10.
So, the rectangle at index 1 has a greater diagonal length therefore we return area = 8 * 6 = 48.

Example 2:
Input: dimensions = [[3,4],[4,3]]
Output: 12
Explanation: Length of diagonal is the same for both which is 5, so maximum area = 12.

*/
var areaOfMaxDiagonal = function (nums) {
  let maxDiag = 0;
  let maxArea = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i][0];
    let b = nums[i][1];
    let calc = Math.sqrt(a * a + b * b);
    if (maxDiag < calc || (calc === maxDiag && a * b > maxArea)) {
      maxDiag = calc;
      maxArea = a * b;
    }
  }
  return maxArea;
};

// console.log(
//   areaOfMaxDiagonal([
//     [25, 60],
//     [39, 52],
//     [16, 63],
//     [33, 56],
//   ])
// );
