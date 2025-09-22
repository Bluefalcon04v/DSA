/*

 *  *  *  *  *  *  *  1  2  3  4  5  6  7 
 *  *  *  *  *  *  $  $  1  2  3  4  5  6 
 *  *  *  *  *  $  $  $  $  1  2  3  4  5 
 *  *  *  *  $  $  $  $  $  $  1  2  3  4 
 *  *  *  $  $  $  $  $  $  $  $  1  2  3 
 *  *  $  $  $  $  $  $  $  $  $  $  1  2 
 *  $  $  $  $  $  $  $  $  $  $  $  $  1 

*/

function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += " * ";
    }
    for (let j = 0; j < 2 * i; j++) {
      row += " $ ";
    }
    for (let l = 0; l < n - i; l++) {
      row += ` ${l + 1} `;
    }
    console.log(row);
  }
}

// starPattern(7);
