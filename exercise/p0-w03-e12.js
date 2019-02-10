/*
Logic Challenge - Target Terdekat
Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let oPosition = 0;
  let xTarget = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
        oPosition = i;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 'x') {
                xTarget.push(Math.abs(j-oPosition));
            }
        }
    }
  }
  let result = xTarget[0];
  for (let i = 0; i < xTarget.length; i++) {
    if (result > xTarget[i]) {
        result = xTarget[i];
    }
  }
  if (xTarget[0] === undefined) {
    return 0;
  }
  return result;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2