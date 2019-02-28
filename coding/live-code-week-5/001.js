/*
==================================
Two Dimentional Array Generator
==================================

[INSTRUKSI]

function twoDimensionalGenerator adalah sebush function yang menerima satu parameter berupa angka.
Function akan mengembalikan sebuah array multidimensi - array yang berisikan array-array yang menampung string.
Array yang dikembalikan memiliki jumlah array di dalamnya sejumlah angka di parameter, dan setiap array di dalamnya akan menampung string 'X' sejumlah angka parameter juga.

WARNING: Harus dalam bentuk array, bukan string! hasil test case dibawah adalah visualisasi bentuk array, dan mungkin bisa sedikit berbeda di setiap console.

[CONTOH]

input: 2
output: [ [ 'X', 'X' ], [ 'X', 'X' ] ]

input: 4
output: [ [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ], [ 'X', 'X', 'X', 'X' ] ]

input: 1
output: [ ['X'] ]
*/

/* Tuliskan Code mu di Bawah ini */

const twoDimensionalGenerator = (angka) => {
    let result = []
    for (let i = 0; i < angka; i++) {
        let temp = []
        for (let j = 0; j < angka; j++) {
            temp.push('X')
        }
        result.push(temp)
    }
    return result
}

console.log(twoDimensionalGenerator(2))
console.log(twoDimensionalGenerator(4))
console.log(twoDimensionalGenerator(1))