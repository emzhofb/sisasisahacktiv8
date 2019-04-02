// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
  //your code here
  let result = [];
  let temp = [];

  for (let i = 0; i < param.length; i++) {
    let limit = param.length - i;
    let flag = false;
    for (let j = i; j < limit; j++) {
      temp = [];
      temp.push(param[j]);
      temp.push(param[param.length - (j + 1)]);
      flag = true;
      for (let k = 0; k < temp.length; k++) {
        if (temp[k] === temp[k + 1]) {
          temp[k + 1] = "Instruktur";
        }
      }
    }
    if (flag) result.push(temp);
  }

  return result;
}

console.log(soal2(["Aries", "Dimas", "Gatot", "Nurmantyo", "Zainul", "Majdi"]));
/*
      output: 
      [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
  */
console.log(soal2(["A", "B", "C", "D", "E"])); //
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]
console.log(
  soal2(["Susan", "Albert", "Erithiana", "Zaki", "Sisijoan", "Henry", "Nio"])
);
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]
