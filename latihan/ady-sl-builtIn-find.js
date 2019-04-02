var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

function myFind(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      console.log(array[i]);
      break;
    }
  }
}
myFind(array1, 10);
