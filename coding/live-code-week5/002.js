/*
======================
Highest Global Minimum
======================

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, 
dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, 
kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

/**PSEUDOCODE
 * 1. STORE 'minArr1' with value of first index from 'firstArr'
 * 2. STORE 'minArr2' with value of first index from 'secoondArr'
 * 3. LOOP the firstArr one by one
 *      IF value of 'firstArr' with the index is lower than 'minArr1'
 *      THEN change the value of 'minArr1' with value of 'firstArr' with the index
 * 4. LOOP the secondArr one by one
 *      IF value of 'secondArr' with the index is lower than 'minArr2'
 *      THEN change the value of 'minArr2' with value of 'secondArr' with the index
 * 5. IF 'minArr1' greather than 'minArr2'
 *      DISPLAY 'minArr1'
 *    ELSE IF 'minArr1' lower than 'minArr2'
 *      DISPLAY 'minArr2'
 */

 /* Tuliskan Code mu di Bawah ini */

const highestGlobalMinimum = (firstArr, secondArr) => {
    let minArr1 = firstArr[0]
    let minArr2 = secondArr[0]
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] < minArr1) {
            minArr1 = firstArr[i]
        }
    }
    for (let i = 0; i < secondArr.length; i++) {
        if (secondArr[i] < minArr2) {
            minArr2 = secondArr[i]
        }
    }
    if (minArr1 > minArr2) {
        return minArr1
    } else {
        return minArr2
    }
}

const arr1 = [1, 1, 1]
const arr2 = [8, 15, 17, 9]
console.log(highestGlobalMinimum(arr1, arr2))