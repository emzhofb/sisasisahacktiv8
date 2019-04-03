var array1 = ["one", "two", "three"];
console.log("array1: ", array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse();
console.log("reversed: ", reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */

console.log("array1: ", array1);
// expected output: Array ['three', 'two', 'one']

console.log("          ");

function myReverse(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function outputReverse(array) {
  return myReverse(array);
}

var array2 = ["one", "two", "three"];
console.log(array2);
console.log(myReverse(array2));
console.log(outputReverse(array2));
