/*
  wajib pseudocode. 
  Jawaban pseudocode disini 
  
  STORE "result" with empty array
  STORE "alpha" with alphabet
  STORE "index" with 0

  ITERATE "param" with for to make row
    STORE "temp" with empty array for the temporary result
    ITERATE "param" again with for to make column
        GIVE "temp" with index of value from "alpha"
        ADD "index" by one
        IF "index" above from length of alpha
            THEN re-assign "index" with 0 to make them start from begin
    ADD "temp" to "result"

  IF "result" doesn't have any value
    DISPLAY "invalid input"
  OTHERWISE
    DISPLAY "result"
*/

function soal2(param) {
  // your code here
  let result = [];
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let index = 0;

  for (let i = 0; i < param; i++) {
    let temp = [];
    for (let j = 0; j < param; j++) {
      temp.push(alpha[index]);
      index++;
      if (index === alpha.length) index = 0;
    }
    result.push(temp);
  }

  if (result.length !== 0) return result;
  else return "invalid input";
}

console.log(soal2(8));
/*
  [
    ['a','b','c','d','e','f','g','h']
    ['i','j','k','l','m','n','o','p']
    ['q','r','s','t','u','v','w','x']
    ['y','z','a','b','c','d','e','f']
    ['g','h','i','j','k','l','m','n']
    ['o','p','q','r','s','t','u','v']
    ['w','x','y','z','a','b','c','d']
    ['e','f','g','h','i','j','k','l']
  ]
*/

console.log(soal2(2));
/*
  [
    ['a','b'],
    ['c','d']
  ]
*/
console.log(soal2(0)); // invalid input
