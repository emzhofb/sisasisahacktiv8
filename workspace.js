function soal3(param1) {
  // your code here
  let index = 0;
  let result = [];

  for (let i = 0; i < param1; i++) {
    let temp = [];
    for (let j = 0; j < param1; j++) {
      index++;
      temp.push(index);
    }
    if (i % 2 === 0) {
      result.push(temp);
    } else {
      let reverseTemp = [];
      for (let k = temp.length - 1; k >= 0; k--) {
        reverseTemp.push(temp[k]);
      }
      result.push(reverseTemp);
    }
  }

  return result;
}

console.log(soal3(3));
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

console.log(soal3(2));
/*
    [
        [1,2],
        [4,3]
    ]
*/

console.log(soal3(4));
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]
*/
