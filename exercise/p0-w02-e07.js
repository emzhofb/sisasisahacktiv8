/*
Looping
Soal looping - asterisk ini memiliki 3 nomor.

1. Menyusun Barisan Bintang
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

Skeleton Code
*/
const rows1 = 5; // input the number of rows
for (let i = 0; i < rows1; i++) {
    console.log('*');
}

// do loops to display asterisks in the console.
/*
Output
jika rows1 = 5

*
*
*
*
*
2. Menyusun Barisan Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code
*/
var rows2 = 5; // input the number of rows
for (let i = 0; i < rows2; i++) {
    let temp = '';
    for (let j = 0; j < rows2; j++) {
        temp += '*';
    }
    console.log(temp);
}
// do loops to display asterisks in the console.
/*
Output
jika rows2 = 5

*****
*****
*****
*****
*****
3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

Skeleton Code
*/
var rows3 = 5; // input the number of rows
let temp = '';
for (let i = 0; i < rows3; i++) {
    temp += '*';
    console.log(temp);
}
// do loops to display asterisks in the console.
/*
Output
jika rows3 = 5
*
**
***
****
*****
*/