/**
Kompetensi: Conditional

Implementasikan pseudocode yang kamu telah buat di nomor 1 menjadi sintaks javascript.

**/

// SKELETON CODE (Code Sample)

var umur = 7; // silakan berikan nilai bebas
var tinggi = 130; // silakan berikan nilai bebas
//tambahkan variable lain jika diperlukan

//your code here
var tarif = 0;

if (umur >= 2 && umur <= 3) {
    tarif = 20000;
    if (tinggi > 70) {
        tarif += 10000;
    }
} else if (umur >= 4 && umur <= 7) {
    tarif = 35000;
    if (tinggi > 120) {
        tarif += 15000;
    }
} else if (umur >= 8 && umur <= 10) {
    tarif = 50000;
    if (tinggi > 150) {
        tarif += 20000;
    }
}

console.log(tarif);