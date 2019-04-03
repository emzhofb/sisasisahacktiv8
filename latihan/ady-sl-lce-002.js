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
  let count = 0;
  for (let i = 0; i < t; i++) {
    let row = "";
    let col = "";
    for (let j = 0; j < p; j++) {
      if (count % 3 === 0) col += "x";
      else col += "o";
      count++;
    }
    row += col;
    console.log(row);
  }
}

generateBarXO(4, 4);
/* 
  xoox
  ooxo
  oxoo
  xoox
*/

generateBarXO(6, 4);
/*
  xooxoo
  xooxoo
  xooxoo
  xooxoo
*/
