/*
739. Daily Temperatures

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

function dailyTemperatures(temp) {
  let stack = [];
  let res = [];

  stack.push(temp.length - 1);
  res[temp.length - 1] = 0;

  for (let i = temp.length - 2; i >= 0; i--) {
    if (temp[stack[stack.length - 1]] > temp[i]) {
      stack.push(i);
      res[i] = 1;
    } else {
      while (temp[stack[stack.length - 1]] <= temp[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        res[i] = 0;
        stack.push(i);
      } else {
        let lastStackVal = stack[stack.length - 1];
        res[i] = lastStackVal - i;
        stack.push(i);
      }
    }
  }

  return res;
}

// > Same Logic Better code

function dailyTemperatures2(arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0);
  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    stack.push(i);
  }
  return ans;
}

// console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures2([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));
