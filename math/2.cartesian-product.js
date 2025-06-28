/*
Problem- Given two finite non-empty sets, find their Cartesian Product

const A = [1,2]
const B = [3,4]

AB = [[1,3], [1,4], [2,3], [2,4]]
*/

function cartesianProduct(A, B) {
  let temp = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      temp.push([A[i], B[j]]);
    }
  }
  return temp;
}

// console.log(cartesianProduct([1, 2], [1, 2])); //[[1,1], [1,2], [2,1], [2,2]]

function cartesianProductRecursion(A, B) {
  if (A.length === 0) return [];

  const [FirstElem, ...restElem] = A;
  const newArr = B.map((b) => [FirstElem, b]);

  return newArr.concat(cartesianProductRecursion(restElem, B));
}

// console.log(cartesianProductRecursion([1, 2], [3, 4, 5]));
