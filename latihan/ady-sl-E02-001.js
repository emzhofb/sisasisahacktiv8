/*
  analisa sendiri dengan apa yang diminta soal melalui test case. 
  wajib menggunakan pseudocode
  PSEUDOCODE HERE : 

    IF "number" is equal to 0
        DISPLAY "invalid input"

    OTHERWISE
        STORE "result" with empty array
        STORE "temp" with "!" (first thing what we display)
        
        ITERATE "number" with FOR LOOP
            ADD "temp" to "result"
            IF "temp" is equal to "!"
                RE-ASSIGN "temp" to "@"
            IF "temp" is equal to "@"
                RE-ASSIGN "temp" to "#"
            IF "temp" is equal to "#"
                RE-ASSIGN "temp" to "!"

        DISPLAY "result"
*/
function soal1(param) {
  // your code here
  if (param === 0) return "invalid input";

  let result = [];
  let temp = "!";
  for (let i = 0; i < param; i++) {
    result.push(temp);
    if (temp === "!") temp = "@";
    else if (temp === "@") temp = "#";
    else if (temp === "#") temp = "!";
  }

  return result;
}

console.log(soal1(3));
// output : ['!','@','#']
console.log(soal1(6));
// output : ['!','@','#','!','@','#']
console.log(soal1(4));
// output : ['!','@','#','!']
console.log(soal1(0)); // invalid input
