function soal3(param) {
  // your code here
  let result = {};

  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let j = 0; j < alpha.length; j++) {
    let temp = [];
    for (let i = 0; i < param.length; i++) {
      if (alpha[j] === param[i][0]) {
        temp.push(param[i]);
      }
    }
    if (temp.length !== 0) {
      result[alpha[j]] = temp;
    }
  }

  console.log(result);
}

console.log(
  soal3([
    "Ayam",
    "Kucing",
    "Bebek",
    "Sapi",
    "Babi",
    "Curut",
    "Cacing",
    "Monyet"
  ])
);
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(
  soal3(["Anjing", "Kuda", "Anoa", "Zebra", "Lipan", "Kudanil", "Landak"])
);

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
