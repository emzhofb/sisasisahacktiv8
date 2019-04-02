/* 
  ================
  addAll recursive
  ================
  [INSTRUCTION]
  jumlahkan semua angka yang ada di array dengan menggunakan metode rekursive
  [EXAMPLE]
  addAllRecursive([1,2,3,4,5,6]) 
  output : 21
*/

function addAllRecursive(arr) {
  // your code here
  if (arr.length === 0) return 0;
  return arr[0] + addAllRecursive(arr.slice(1));
}

addAllRecursive([1, 2, 3, 4, 5, 6]); // 21
