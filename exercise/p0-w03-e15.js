/*
Logic Challenge - Mengelompokkan Hewan
Problem
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

Code
*/
function groupAnimals(animals) {
  // you can only write your code here!
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let zoo = [];
  for (let i = 0; i < alphabet.length; i++) {
    let firstLetter = [];
    for (let j = 0; j < animals.length; j++) {
        if (alphabet[i] === animals[j][0]) {
            firstLetter.push(animals[j]);
        }
    }
    if (firstLetter.length !== 0) {
        zoo.push(firstLetter);
    }
  }
  return zoo;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]