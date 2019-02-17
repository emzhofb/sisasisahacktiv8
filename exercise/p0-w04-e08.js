/*
Logic Challenge - Tukar Besar Kecil
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

Code
*/
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  const lowAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const bigAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let changeWord = '';
  for (let i = 0; i < kalimat.length; i++) {
    let flag = true;
    for (let j = 0; j < lowAlpha.length; j++) {
      if (kalimat[i] === lowAlpha[j]) {
        changeWord += bigAlpha[j];
        flag = false;
      } else if (kalimat[i] === bigAlpha[j]) {
        changeWord += lowAlpha[j];
        flag = false;
      }
    }
    if (flag) {
      changeWord += kalimat[i];
    }
  }
  return changeWord;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"