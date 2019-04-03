var animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log("          ");

function mySlice(array, begin, end) {
  let ended = 0;

  if (end === undefined) ended = array.length;
  else ended = end;

  let result = [];

  for (let i = begin; i < ended; i++) {
    result.push(array[i]);
  }

  return result;
}

var myAnimal = ["ant", "bison", "camel", "duck", "elephant"];
console.log(mySlice(myAnimal, 2));
console.log(mySlice(myAnimal, 2, 4));
console.log(mySlice(myAnimal, 1, 5));
