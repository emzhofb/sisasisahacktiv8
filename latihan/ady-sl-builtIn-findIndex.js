var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

function myFindIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      console.log(i);
      break;
    }
  }
}
myFindIndex(array1, 13);
