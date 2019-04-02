// Array.from()

console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

function makeArray1(param) {
  let result = [];
  for (let i = 0; i < param.length; i++) {
    result.push(param[i]);
  }
  console.log(result);
}
makeArray1("foo");

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

function makeArray2(param1) {
  let result = [];
  for (let i = 0; i < param1.length; i++) {
    result.push(param1[i] + param1[i]);
  }
  console.log(result);
}
makeArray2([1, 2, 3]);
