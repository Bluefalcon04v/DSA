/* MATH 
 Add Two Numbers
*/

function addTwoNumber() {
  let l1 = [2, 4, 3];
  let l2 = [5, 6, 4];

  l1 = l1.join("");
  let reversel1 = 0;
  while (l1 !== 0) {
    let digit = l1 % 10;
    reversel1 = reversel1 * 10 + digit;
    l1 = Math.trunc(l1 / 10);
  }

  l2 = l2.join("");
  let reversel2 = 0;
  while (l2 !== 0) {
    let digit = l2 % 10;
    reversel2 = reversel2 * 10 + digit;
    l2 = Math.trunc(l2 / 10);
  }

  let newNumber = reversel1 + reversel2;

  let newReverse = 0;
  while (newNumber !== 0) {
    let digit = newNumber % 10;
    newReverse = newReverse * 10 + digit;

    newNumber = Math.trunc(newNumber / 10);
  }

  newReverse = newReverse.toString().split('').map(Number)
  // console.log(newReverse);
}

addTwoNumber();
