/*
  diberikan sebuah array angka dimana , angka - angka tersebut adalah 
  increment dari angka sebelumnya sebesar 1 . 
  tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
  - Tidak boleh memakai perulangan 
  - Tidak boleh memakai function magic apapun kecuali .length pada array
  - Tidak boleh memakai rekursif 
*/

function addAll(array) {
  // your code here
  let first = array[0];
  let increment = array[1] - array[0];
  let all = array.length;
}

console.log(addAll([1, 2, 3, 4, 5]));
// 15

console.log(addAll([5, 6, 7, 8, 9, 10]));
// 45

console.log(addAll([2, 3, 4, 5, 6]));
// 20

// console.log(addAll([8, 7, 6, 5, 4, 3, 2]));
// 35
