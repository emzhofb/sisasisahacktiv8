function myIncludes(array, value) {
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      flag = true;
    }
  }
  return flag;
}

var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true
console.log(myIncludes(array1, 2));

var pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true
console.log(myIncludes(pets, "cat"));

console.log(pets.includes("at"));
// expected output: false
console.log(myIncludes(pets, "at"));
