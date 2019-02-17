/*
Logic Challenge - Digit Perkalian Minimum
Problem
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

Code
*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let tempResult = [];
  for (let i = 0; i <= angka; i++) {
    let tempNum = '';
    for (let j = 0; j <= angka; j++) {
      if (i * j === angka) {
        tempNum = String(i) + String(j);
      }
    }
    if (tempNum !== '') {
      tempResult.push(tempNum);
    }
  }
  let result = tempResult[0].length;
  for (let i = 0; i < tempResult.length; i++) {
    if (tempResult[i].length < result) {
      result = tempResult[i].length;
    }
  }
  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2