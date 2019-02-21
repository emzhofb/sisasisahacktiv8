/*
HACKTIV8 Live code week 4

===============================
Soal Array 3 - Remove Duplicate
===============================

[INSTRUKSI]
Tersedia satu input array yang memiliki angka yang duplikat, Tugas kamu menghapus angka yang duplikat tersebut.

Output: array yang telah di-sorted, semua duplikat dihapus

[CONTOH]

1) [1, 4, 3, 1, 2, 2, 4] --> [1, 2, 3, 4]

*/

const hapusDuplikat = (parameter) => {
  // sorting
  for (let i = 0; i < parameter.length; i++) {
    let minimum = parameter[i]
    let index = i
    for (let j = i+1; j < parameter.length; j++) {
      if (minimum > parameter[j]) {
        minimum = parameter[j]
        index = j
      }
    }
    let temp = parameter[i]
    parameter[i] = minimum
    parameter[index] = temp
  }
  // hapus duplikat
  let result = []
  for (let i = 0; i < parameter.length; i++) {
    let j = i+1
    if (parameter[i] !== parameter[j]) {
      result.push(parameter[i])
    }
  }
  return result
}

console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4])); // [1, 2, 3, 4]
console.log(hapusDuplikat([2, 2, 2, 2])); // [2]
console.log(hapusDuplikat([1, 2, 3])); // [1, 2, 3]
console.log(hapusDuplikat([6, 5, 3, 2])); // [2, 3, 5, 6]