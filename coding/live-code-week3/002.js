/*
==================================
Array Mastery: Smallest Number
==================================

[INSTRUKSI]
Function smallestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
smallestNumber akan mengembalikan angka yang terkecil dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 2

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

function smallestNumber(params) {
    let firstNum = params[0];
    for (let i = 0; i < params.length; i++) {
        if (params[i] < firstNum) {
            firstNum = params[i];
        }
    }
    return firstNum;
}

// TEST CASES
console.log(smallestNumber([5, 2, 1, 4])); // 1
console.log(smallestNumber([999, 5, 0, 1, 4, 998])); // 0
console.log(smallestNumber([15, 32, 11, 14])); // 11
console.log(smallestNumber([5, 4, 3, 2, 1, 0])); // 0
console.log(smallestNumber([123, 321, 143, 313])); // 123
