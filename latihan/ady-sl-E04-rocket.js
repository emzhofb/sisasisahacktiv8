function rocket(param) {
  // your code here
  let result = [];
  let middle = Math.floor(param / 2);

  for (let i = 0; i < param; i++) {
    let temp = [];
    if (param % 2 !== 0) {
      for (let j = 0; j < param; j++) {
        if (i === middle && j === middle) temp.push("*");
        else temp.push(" ");
      }
      result.push(temp);
    } else {
      for (let j = 0; j < param; j++) {
        if (i === middle - 1 && j === middle - 1) temp.push("*");
        else if (i === middle && j === middle) temp.push("*");
        else if (i === middle - 1 && j === middle) temp.push("*");
        else if (i === middle && j === middle - 1) temp.push("*");
        else temp.push(" ");
      }
      result.push(temp);
    }
  }

  return result;
}

console.log(rocket(5));
/*
  [
    ['','','','',''],
    ['','','','',''],
    ['','','*','',''],
    ['','','','',''],
    ['','','','','']
  ]
*/

console.log(rocket(3));
/*
  [
    ['','',''],
    ['','*',''],
    ['','',''],
  ]
*/

console.log(rocket(4));
/*
  [
    ['','','',''],
    ['','*','*',''],
    ['','*','*',''],
    ['','','',''],
  ]
*/

console.log(rocket(2));
/*
  [
    ['*','*'],
    ['*','*'],
  ]
*/

console.log(rocket(1));
/*
  [
    ['*']
  ]
*/
