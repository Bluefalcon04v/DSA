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

// function dailyTemperatures(temp) {
//   let stack = [];
//   let map = {};
//   let lastElem = temp.length - 1;

//   stack.push(temp[lastElem]);
//   map[temp[lastElem]] = 0;

//   for (let i = lastElem - 1; i >= 0; i--) {
//     let top = stack.length - 1;
//     if (temp[i] < stack[top]) {
//       map[temp[i]] = 1;
//       stack.push(temp[i]);
//     } else {
//       while (temp[i] > stack[stack.length - 1]) {
//         stack.pop();
//       }
//       if (stack.length < 1) {
//         map[temp[i]] = 0;
//         stack.push(temp[i]);
//       } else {
//         map[temp[i]] = i;
//         stack.push(temp[i]);
//       }
//     }
//   }

//   let res = [];
//   for (let i = 0; i < temp.length; i++) {
//     res.push([map[temp[i]], temp[i]]);
//     res.push(map[temp[i]]);
//   }
//   console.log(map);
//   return res;
// }

function dailyTemperatures(temp) {
  let stack = [];
  let lastElem = temp.length - 1;

  stack.push([temp[lastElem], 0]);

  console.log(stack)
  for (let i = lastElem - 1; i >= 0; i--) {
    let top = stack.length - 1;
    if (stack[top][0] > temp[i]) {
      stack.push([temp[i], i]);
    } else {
      let top = stack.length - 1;
    //   while (stack[top][0] < temp[i]) {
    //     stack.pop();
    //   }
      if (stack.length < 1) {
        stack.push([temp[i], 0]);
      } else {
        stack.push([temp[i], 0]);
      }
    }
  }
  return stack;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 60, 90]));
