/*

 1 
 1  0 
 1  0  1 
 1  0  1  0 
 1  0  1  0  1 
 1  0  1  0  1  0 
 1  0  1  0  1  0  1 

*/

//? Method  1
// function starPattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//       let isOdd = j % 2 === 1;
//       if (isOdd) {
//         row += " 0 ";
//       } else {
//         row += " 1 ";
//       }
//     }
//     console.log(row);
//   }
// }

//? Method  2
function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 0; j <= i; j++) {
      row += toggle;
      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

// starPattern(7);
