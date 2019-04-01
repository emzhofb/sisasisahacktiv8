function soal1(param) {
  // Your Code Here
  let result = [];

  for (let i = 1; i <= param; i++) {
    if (i % 4 === 0 && i % 7 === 0) result.push("FizzBuzz");
    else if (i % 4 === 0) result.push("Fizz");
    else if (i % 7 === 0) result.push("Buzz");
    else result.push("");
  }

  return result;
}

console.log(soal1(20));
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10));
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30));
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']

/*
fizz = 4, 8, 12, 16, 20, 24
buzz = 7, 14, 21
fizzbuzz = 28
*/

// or

/*
fizz = 3, 7, 11, 15, 19, 23
buzz = 6, 13, 20, 
fizzbuzz = 27
*/
