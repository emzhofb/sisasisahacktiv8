// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
  //your code here
  let result = [];
  let temp = [];
  for (let i = 0; i < param.length; i++) {
    for (let j = i; j < param.length - i; j++) {
      temp = [];
      temp.push(param[i]);
      temp.push(param[param.length - (i + 1)]);
    }
    result.push(temp);
  }
  console.log(result);
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
