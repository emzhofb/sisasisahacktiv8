/*
Logic Challenge - Mengurutkan Abjad
Problem
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

Code
*/
function urutkanAbjad(str) {
  // you can only write your code here!
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let strSort = '';
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (alphabet[i] === str[j]) {
        strSort += alphabet[i];
      }
    }
  }
  return strSort;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'