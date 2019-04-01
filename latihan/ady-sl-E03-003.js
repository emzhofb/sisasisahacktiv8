function soal3(param) {
  // your code here
  let result = {};
  let under20 = [];
  let over20 = [];

  for (let i = 0; i < param.length; i++) {
    if (param[i][1] < 20) under20.push(param[i][0]);
    else over20.push(param[i][0]);
  }

  result.under20 = under20;
  result.over20 = over20;

  return result;
}

console.log(
  soal3([
    ["dimas", 17],
    ["akbar", 28],
    ["rifki", 30],
    ["dimitri", 18],
    ["saitama", 19]
  ])
);
/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/
