var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

function myConcat(param1, param2) {
  let result = [];
  for (let i = 0; i < param1.length; i++) {
    result.push(param1[i]);
  }
  for (let i = 0; i < param2.length; i++) {
    result.push(param2[i]);
  }
  console.log(result);
}
myConcat(array1, array2);
