var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

console.log("          ");

function myShift(array) {
  let afterShift = [];

  for (let i = 1; i < array.length; i++) {
    afterShift.push(array[i]);
  }

  return afterShift;
}

function theFirst(array) {
  return array[0];
}

var array2 = [1, 2, 3];
var firstValue = theFirst(array2);

console.log(myShift(array2));
console.log(firstValue);
