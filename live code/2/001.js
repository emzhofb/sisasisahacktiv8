/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/**
 * STORE "gold" without any value
 * STORE "silver" without any value
 * STORE "bronze" without any value
 * STORE "totalGold" without any value
 * STORE "totalSilver" without any value
 * STORE "totalBronze" without any value
 * 
 * LOOP "input"
 *  IF "input" equal to "G"
 *    add 2 to "gold"
 *    add 1 to "totalGold"
 *  IF "input" equal to "S"
 *    add 2 to "silver"
 *    add 1 to "totalSilver"
 *  IF "input" equal to "B"
 *    add 2 to "bronze"
 *    add 1 to "totalBronze"
 * 
 * DISPLAY 'jumlah gold: ' + totalGold + ', jumlah Silver: ' + totalSilver + ', jumlah Bronze: ' + totalBronze + '. Dan totalnya adalah: ' + result;
 */

function poinCalculator(array) {
  // your code here
  let gold = 0;
  let silver = 0;
  let bronze = 0;
  let totalGold = 0;
  let totalSilver = 0;
  let totalBronze = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'G') {
      gold += 2;
      totalGold++;
    } else if (array[i] === 'S') {
      silver += 1;
      totalSilver++;
    } else if (array[i] === 'B') {
      bronze += 0.5;
      totalBronze++;
    }
  }
  let result = gold + silver + bronze;
  return 'jumlah gold: ' + totalGold + ', jumlah Silver: ' + totalSilver + ', jumlah Bronze: ' + totalBronze + '. Dan totalnya adalah: ' + result;
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0