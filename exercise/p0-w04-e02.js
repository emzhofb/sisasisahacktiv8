/*
Logic Challenge - Faktor Persekutuan Terbesar
Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

Code
*/
function fpb(angka1, angka2) {
  // you can only write your code here!
  let result = [];
  for (let i = 0; i < angka1; i++) {
    for (let j = 0; j < angka2; j++) {
        if (angka1 % i === 0) {
            if (angka2 % j === 0) {
                if (i === j) {
                    result.push(i);
                }
            }
        }
    }
  }
  return result[result.length-1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1