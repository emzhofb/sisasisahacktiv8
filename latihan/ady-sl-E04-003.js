// hanya boleh menggunakan rekursif

function soal3(param1, param2) {
  // your code here
  if (param2 === 0) return 1;

  return param1 * soal3(param1, param2 - 1);
}

console.log(soal3(2, 5));
/*
  2 * 2 * 2 * 2 * 2 
  32
*/

console.log(soal3(3, 3));
/*
  27
*/
