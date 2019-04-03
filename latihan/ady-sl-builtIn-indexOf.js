function myIndexOf(array, value, index) {
  let i = 0;
  let indexOfValue = 0;

  if (index === undefined) i = 0;
  else i = index;

  for (i; i < array.length; i++) {
    if (array[i] === value) {
      indexOfValue = i;
      break;
    }
  }

  if (indexOfValue === 0) indexOfValue = -1;

  return indexOfValue;
}

var beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1
console.log(myIndexOf(beasts, "bison"));

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4
console.log(myIndexOf(beasts, "bison", 2));

console.log(beasts.indexOf("giraffe"));
// expected output: -1
console.log(myIndexOf(beasts, "giraffe"));
