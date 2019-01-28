/**
  Kompetensi: Loopings

  Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
  Disediakan variable height dan akan membuat sebuah pola tangga menampilkan x ke samping di baris ganjil,
  dan o di baris genap.
  Buatlah sebuah tangga string dengan pola berikut:

  Contoh 1 (height = 3)
  ---------------------
  tampilan:
  x
  oo
  xxx

  Contoh 2 (height = 6)
  ----------------------
  tampilan:
  x
  oo
  xxx
  oooo
  xxxxx
  oooooo

  WAJIB MENGGUNAKAN LOOPING
**/

var height = 6;; //isi dengan nilai tangga

//your code here
for (let i = 1; i <= height; i++) {
    let temp = '';
    for (let j = 0; j < i; j++) {   
        if (i % 2 === 1) {
            temp += 'x';
        } else {
            temp += 'o';
        }
    }
    console.log(temp);
}