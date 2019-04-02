/*
    ============
    Generate Bar 
    ============
    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 
*/

function generateBar(p, t) {
  // your code here
  if (p < t) console.log("panjang harus lebih besar dari tinggi");
  else {
    let result = "";
    for (let i = 0; i < t; i++) {
      let temp = "";
      for (let j = 0; j < p; j++) {
        if (j === 0) temp += "o";
        else if (j === p - 1) temp += "o";
        else if (i === 0) temp += "o";
        else if (i === t - 1) temp += "o";
        else temp += " ";
      }
      console.log(temp);
    }

    console.log(result);
  }
}

generateBar(4, 3); //
/*
        oooo
        o  o
        oooo
    */

generateBar(10, 4); //
/*
        oooooooooo
        o        o
        o        o
        oooooooooo
    */

generateBar(4, 5); // panjang harus lebih besar daripada tinggi
