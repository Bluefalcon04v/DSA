/*

<  -  >  >  >  >  >  > 
<  <  -  >  >  >  >  > 
<  <  <  -  >  >  >  > 
<  <  <  <  -  >  >  > 
<  <  <  <  <  -  >  > 
<  <  <  <  <  <  -  > 

*/

function starPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let el = 0; el <= i; el++) {
      row += " < ";
    }
    row += " - ";
    for (let er = 0; er < n - i; er++) {
      row += " > ";
    }
    console.log(row);
  }
}

// starPattern(6);
