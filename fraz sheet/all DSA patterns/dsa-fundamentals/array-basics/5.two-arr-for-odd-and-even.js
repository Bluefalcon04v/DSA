/*
Create Two Arrays one for Odd Elements and one for Even Elements

Input array: [5, 2, 8, 11, 3, 6]
output
    Even elements array: [2, 8, 6]
    Odd elements array: [5, 11, 3]
*/

function twoArray(arr) {
  let evenArr = [];
  let oddArr = [];
  arr.forEach((_) => {
    if (_ % 2 === 0) evenArr.push(_);
    else oddArr.push(_);
  });
  return { evenArr, oddArr };
}

// console.log(twoArray([5, 2, 8, 11, 3, 6]));
