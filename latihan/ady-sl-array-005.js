/*
    =======================
    Alphabet Multidimension
    =======================
    Buatlah sebuah function yang berfungsi mengenerate Alphabet Multidimension. 
    yang artinya di dalam array multidimension terdapat alphabet yang isinya 
    berurutan. dimana Array multidimension nya memiliki row dan col yang sama
    
    [EXAMPLE]
    alphabetMultidimension(6)
    maka output nya adalah : 
    [
        [A,B,C,D,E,F],
        [G,H,I,J,K,L],
        [M,N,O,P,Q,R],
        [S,T,U,V,W,X],
        [Y,Z,A,B,C,D], <--- perhatikan, jika sudah sampai z maka , kembali lagi ke A
        [E,F,G,H,I,J]
    ]
*/

function alphabetMultidimension(num) {
  // code
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = 0;

  let result = [];

  for (let i = 0; i < num; i++) {
    let temp = [];
    for (let j = 0; j < num; j++) {
      temp.push(alphabet[index]);
      index++;
      if (index === 26) {
        index = 0;
      }
    }
    result.push(temp);
  }

  return result;
}

console.log(alphabetMultidimension(6));
/*
output:
[
    [A,B,C,D,E,F],
    [G,H,I,J,K,L],
    [M,N,O,P,Q,R],
    [S,T,U,V,W,X],
    [Y,Z,A,B,C,D],
    [E,F,G,H,I,J]
]
*/
