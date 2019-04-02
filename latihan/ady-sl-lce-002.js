/*
  ===========
  Bar X dan O
  ===========
  
  program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X
  
  [INSTRUCTION]
  
  diberikan 2 buah parameter untuk mengenerate Bar
  - p => panjang
  - t => tinggi
  character yang pertama kali di cetak adalah x ,
  lalu o dan setelah itu o kemudian kembali lagi ke x
  
  [EXAMPLE]
  
  generateBarXO(4,3)
  output:

  xoox
  ooxo
  oxoo
  xoox
  
  generateBarXO(6,4)
  output:
  
  xooxoo
  xooxoo
  xooxoo
  xooxoo
*/

function generateBarXO(p, t) {
  // your code here
  for (let i = 0; i < t; i++) {
    let result = "";
    let temp = "";
    for (let j = 0; j < p; j++) {
      temp += "x";
    }
    result += temp;
    console.log(result);
  }
}

generateBarXO(4, 4);
/* 
  xoox
  ooxo
  oxoo
  xoox
*/

// generateBarXO(6, 4);
/*
  xooxoo
  xooxoo
  xooxoo
  xooxoo
*/
