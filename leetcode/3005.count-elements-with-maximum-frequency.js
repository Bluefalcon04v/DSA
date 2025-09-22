/*
3005. Count Elements With Maximum Frequency

You are given an array nums consisting of positive integers.
Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
The frequency of an element is the number of occurrences of that element in the array.

Example 1:
Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.

Example 2:
Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.

*/

function maxFrequencyElements(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    !map[nums[i]] ? (map[nums[i]] = 1) : map[nums[i]]++;
  }

  let mapKey = Object.values(map);
  let maxFrequency = 0;
  let frequencyCount = 0;
  for (let i = 0; i < mapKey.length; i++) {
    if (maxFrequency < mapKey[i]) {
      maxFrequency = mapKey[i];
    }
  }
  for (let i = 0; i < mapKey.length; i++) {
    if (maxFrequency === mapKey[i]) {
      frequencyCount++;
    }
  }
  return frequencyCount * maxFrequency;
}

// console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
// console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
