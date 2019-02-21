let num = 100;
let result = []

for (let i = 0; i < 10; i++) {
  let temp = []
  for (let j = 0; j < 10; j++) {
    temp.push(num)
    num--
  }
  if (i % 2 === 1) {
    // temp.reverse()
    let myReverse = []
    for (let i = temp.length-1; i >= 0; i--) {
      myReverse.push(temp[i])
    }
    result.push(myReverse)
  } else {
    result.push(temp)
  }
}

for (let i = 0; i < result.length; i++) {
  let theNum = ''
  for (let j = 0; j < result[i].length; j++) {
    theNum += result[i][j] + ' '
  }
  console.log(theNum)
}