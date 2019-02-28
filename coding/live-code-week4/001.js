/*
HACKTIV8 Live code week 4

=======================
Soal Array 1 - Pair Sum
=======================

[INSTRUKSI]
Diberikan 2 input: array dan targetSum
Output ada berapa pasangan nilai dalam array yang memiliki jumlah sama dengan
targetSum, sepasang nilai tidak boleh memiliki indeks yang sama

[CONTOH]
1) [1 ,2, 3, 4, 5], targetSum = 8  -->  1
*/

const pairSum = (params1, params2) => {
  const sameNumber = params2
  let totalSameNumber = 0
  for (let i = 0; i < params1.length; i++) {
    for (let j = i+1; j < params1.length; j++) {
      if (params1[i] + params1[j] === sameNumber) {
        totalSameNumber++
      }
    }
  }
  return totalSameNumber
}

console.log(pairSum([1, 2, 3, 4, 5], 8)); // 1
console.log(pairSum([3, 2, 1, 5, 2], 4)); // 2
console.log(pairSum([1, 1, 1], 2));   // 3
console.log(pairSum([1, 2, 3], 6));   // 0