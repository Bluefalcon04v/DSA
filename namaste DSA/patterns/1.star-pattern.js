/*

 -  -  -  -  -  -  -  -  -  -  -  * 
 -  -  -  -  -  -  -  -  -  -  *  * 
 -  -  -  -  -  -  -  -  -  *  *  * 
 -  -  -  -  -  -  -  -  *  *  *  * 
 -  -  -  -  -  -  -  *  *  *  *  * 
 -  -  -  -  -  -  *  *  *  *  *  * 
 -  -  -  -  -  *  *  *  *  *  *  * 
 -  -  -  -  *  *  *  *  *  *  *  * 
 -  -  -  *  *  *  *  *  *  *  *  * 
 -  -  *  *  *  *  *  *  *  *  *  * 
 -  *  *  *  *  *  *  *  *  *  *  * 
 *  *  *  *  *  *  *  *  *  *  *  * 

 */

function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " - ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += " * ";
    }
    console.log(row);
  }
}

starPattern(12);





// function starPattern(n){
//   for(let i = 0; i <= n+1; i++){
//   let row = ""
//   for(let el = 0; el < Math.abs((n - 2)- i); el++ ){
//     row += " - "
//   }
//   for(let num = 0; num < ; num++ ){
//     row += n
//   }
  
//  console.log(row)
//  }
// }


// starPattern(5)


