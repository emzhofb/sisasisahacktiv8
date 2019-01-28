/**
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter
berupa angka yang merupakan ukuran waktu dalam menit.

Function akan me-return string waktu dalam format x jam x menit berdasarkan menit tersebut.

Contoh, jika menit adalah 63, maka function akan me-return "1 jam 3 menit".

**/

function konversiMenit(menit) {
    //your code here
    const hour = Math.floor(menit / 60);
    const minute = menit % 60;
    let result = '';
    if (hour < 1) {
        result = minute + ' menit';
    } else if (minute < 1) {
        result = hour + ' jam';
    } else {
        result = hour + ' jam ' + minute + ' menit';
    }
    return result;
}

// TEST CASES / DRIVER CODE
console.log(konversiMenit(63)); // 1 jam 3 menit
console.log(konversiMenit(124)); // 2 jam 4 menit
console.log(konversiMenit(53)); // 53 menit
console.log(konversiMenit(88)); // 1 jam 28 menit
console.log(konversiMenit(120)); // 2 jam