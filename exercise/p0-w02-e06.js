/*
Looping
Soal looping ini memiliki 3 nomor.

1. Melakukan Looping Menggunakan While
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

Output
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer                                                                              
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/
console.log('LOOPING PERTAMA');
let index = 0;
while (index < 20) {
    index += 2;
    console.log(index + ' - I love coding');
}
console.log('LOOPING KEDUA');
let limit = 20;
while (limit > 0) {
    console.log(limit + ' - I will become fullstack developer');
    limit -= 2;
}
/*
2. Melakukan Looping Menggunakan For
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

Hints
Operator ++ disebut dengan operator Increment Operator -- disebut dengan operator Decrement

Output
LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding 
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding 
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
*/
console.log('LOOPING PERTAMA');
for (let i = 2; i <= 20; i += 2) {
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (let i = 20; i >= 2; i -= 2) {
    console.log(i + ' - I will become fullstack developer');
}
/*
3. Angka Ganjil dan Genap
Hint: kamu akan menggunakan kondisional juga di kasus ini.

Problem
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya.
output
//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 3, 
//output
"3 KELIPATAN 3" 
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 6, 
//output
"6 KELIPATAN 6" 
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1, 
//output
"" 
//counter sekarang = 10, 
//output
"10 KELIPATAN 10" 
// dan seterusnya :)
*/

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i + ' - Ganjil');
    } else {
        console.log(i + ' - Genap');
    }
}

for (let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + ' - kelipatan 3');
    }
}
for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + ' - kelipatan 6');
    }
}
for (let i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + ' - kelipatan 10');
    }
}