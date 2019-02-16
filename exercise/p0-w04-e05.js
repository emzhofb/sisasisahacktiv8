/*
Logic Challenge - Ubah Huruf
Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

Code
*/
function ubahHuruf(kata) {
  // you can only write your code here!
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === alphabet[alphabet.length-1]) {
        result += alphabet[0];
    } else {
        for (let j = 0; j < alphabet.length; j++) {
            if (kata[i] === alphabet[j]) {
                result += alphabet[j+1];
            }
        }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu