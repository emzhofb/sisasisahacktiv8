/*
Menggunakan Switch-Case
Objectives
Mengerti Cara Menggunakan Switch-Case
Mengerti Logika Switch-Case
Directions
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:
*/
// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
const tanggal = 23; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
const tahun = 1999; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1:
        bulan = 'Januari'
        break;
    case 2:
        bulan = 'Februari'
        break;
    case 3:
        bulan = 'Maret'
        break;
    case 4:
        bulan = 'April'
        break;
    case 5:
        bulan = 'Mei'
        break;
    case 6:
        bulan = 'Juni'
        break;
    case 7:
        bulan = 'Juli'
        break;
    case 8:
        bulan = 'Agustus'
        break;
    case 9:
        bulan = 'September'
        break;
    case 10:
        bulan = 'Oktober'
        break;
    case 11:
        bulan = 'November'
        break;
    case 12:
        bulan = 'Desember'
        break;
    default:
        bulan = 'Bulan itu cuma dari angka 1 sampe 12 woe'
        break;
}

if (tanggal < 1 || tanggal > 31) {
    console.log('Tanggal itu dari 1 sampe 31 bro');
}

if (tahun < 1900 || tahun > 2200) {
    console.log('Tahun yang bisa di input antara 1900-2200');
}

console.log(tanggal + ' ' + bulan + ' ' + tahun);