/*
Calculate Sum and Product of Array Elements

Input: [-1, 2, -3, 4]
Expected Output:
{
  sum: 2,
  product: 24
}
*/

function sumAndProduct(nums) {
  let [product, sum] = [1, 0];
  if (nums.length < 1) return { sum, product };
  nums.forEach((i) => {
    sum += i;
    product *= i;
  });
  return { sum, product };
}

// console.log(sumAndProduct([-1, -4, 2, -9, 5]));
// console.log(sumAndProduct([-1, -4]));
// console.log(sumAndProduct([]));
