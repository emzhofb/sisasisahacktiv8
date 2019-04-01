function soal2(param) {
  // your code here
  if (param.length < 3) return "invalid input";

  let result = [];
  let middle = Math.floor(param.length / 2);
  // console.log(middle);

  for (let i = 0; i < param.length; i++) {
    if (param.length % 2 !== 0) {
      if (i === middle) {
        result.push(param[0] * param[param.length - 1]);
      } else {
        result.push(param[i]);
      }
    } else {
      if (i === middle) {
        result.push(param[0] * param[param.length - 1]);
      } else if (i === middle - 1) {
        result.push(param[0] * param[param.length - 1]);
      } else {
        result.push(param[i]);
      }
    }
  }

  return result;
}

console.log(soal2([34, "", "", "", 40]));
// [34,'',1360,'',40]

console.log(soal2([1, 2, 3, 4, 5]));
// [1,2,5,4,5]

console.log(soal2([20, "", "", "", "", "", "", 30]));
// [20,'','',600,600,'','',30])

console.log(soal2([6, "", "", "", "", "", 9]));
// [6,'','',54,'','',9]

console.log(soal2([1, 2])); // invalid input
console.log(soal2([1])); // invalid input
console.log(soal2([])); // invalid input
