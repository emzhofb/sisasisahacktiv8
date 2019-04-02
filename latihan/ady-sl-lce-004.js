/*
    ================
    simple Trapesium
    ================
    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)
    Program ini memiliki 2 release. 
    yaitu : 
    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo
    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo
*/

function trapesiumRelease0(t) {
  // your code here
  for (let i = 0; i < t; i++) {
    let result = "";
    for (let j = 0; j < t; j++) {
      result += "o";
      for (let k = j; k < i; k += i) {
        result += "o";
      }
    }
    console.log(result);
  }
}

trapesiumRelease0(5);
/* 
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

console.log("                    ");

function trapesiumRelease1(t) {
  //your code here
  for (let i = 0; i < t; i++) {
    let result = "";
    for (let j = 0; j < t; j++) {
      if (i === 0) {
        result += "o";
      } else if (j === 0) {
        result += "o";
      } else if (i === t - 1) {
        result += "o";
      } else if (j === t - 1) {
        result += "o";
      } else {
        result += " ";
      }
      for (let k = j; k < i; k += i) {
        result += " ";
      }
    }
    console.log(result);
  }
}

trapesiumRelease1(5);
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/
