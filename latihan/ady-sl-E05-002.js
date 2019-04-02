function soal2(param) {
  // your code here
  if (param % 2 === 0) {
    return "invalid input";
  }

  let result = [];
  let pyramid = Math.round(param / 2);

  for (let i = 0; i < pyramid; i++) {
    let temp = [];
    for (let j = 0; j < param; j++) {
      if (j === pyramid - 1) {
        temp.push("*");
      } else if (i === pyramid - 1) {
        temp.push("*");
      } else if (i + j === pyramid - 1) {
        temp.push("*");
      } else if (j - i === pyramid - 1) {
        temp.push("*");
      } else {
        temp.push(" ");
      }
    }
    result.push(temp);
  }

  return result;
}

console.log(soal2(5));
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3));
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)); // invalid input
console.log(soal2(2)); // invalid input
console.log(soal2(6)); // invalid input
