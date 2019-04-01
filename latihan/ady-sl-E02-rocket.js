/*
  membuat bendera scotlandia
  output hanya menggunakan console.log string yang isinya 
  hanya berupa spasi kosong dan char *
    petunjuk : 
  - input harus lebih dari 3 , jika tidak maka "invalid input"
  - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
  // yout code here
  if (param < 3 || param % 2 === 0) {
    return "invalid input";
  }

  for (let i = 0; i < param; i++) {
    let result = "";
    for (let j = 0; j < param; j++) {
      if (i - j === 0 || i + j === param - 1) result += "*";
      else result += " ";
    }
    console.log("'" + result + "'");
  }

  return "";
}

console.log(scotlandFlag(5));
/*
  '*   *'
  ' * * '
  '  *  '
  ' * * '
  '*   *'
*/

console.log(scotlandFlag(9));
/*
  '*       *'
  ' *     * '
  '  *   *  '
  '   * *   '
  '    *    '
  '   * *   '
  '  *   *  '
  ' *     * '
  '*       *'
*/
