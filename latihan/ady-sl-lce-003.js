/*
    =========
    Triangel
    =========
    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********
    triangel(3)
    output:
        *    
       ***
      *****
*/

function triangel(t) {
  // your code here
  if (t === 1 || t % 2 === 0) console.log("t is invalid");
  else {
    let column = t * 2;
    for (let i = 0; i < t; i++) {
      let result = "";
      let middle = Math.abs(t / 2);
      for (let j = 0; j < column - 1; j++) {
        if (j === middle) result += "*";
        else if (i + j === middle) result += "*";
        else if (j - i === middle) result += "*";
        else if (i === t - 1) result += "*";
        else result += " ";
      }
      console.log(result);
    }
  }
}

// triangel(3);
//   *
//  ***
// *****

triangel(5);
//     *
//    ***
//   *****
//  *******
// *********

triangel(1); // t is invalid
