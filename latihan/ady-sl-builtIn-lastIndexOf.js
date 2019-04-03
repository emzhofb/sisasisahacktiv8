function myLastIndexOf(array, value) {
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) index = i;
  }

  if (index === 0) index = -1;

  return index;
}

var animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// expected output: 3
console.log(myLastIndexOf(animals, "Dodo"));

console.log(animals.lastIndexOf("Tiger"));
// expected output: 1
console.log(myLastIndexOf(animals, "Tiger"));
