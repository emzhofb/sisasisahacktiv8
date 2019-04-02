function rocket(param) {
  // your code here
  let result = [];

  for (let i = 0; i < param; i++) {
    let temp = [];
    for (let j = 0; j < param; j++) {
      let index = [];
      index.push(i);
      index.push(j);
      temp.push(index);
    }
    result.push(temp);
  }

  return result;
}

console.log(rocket(3));

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/
