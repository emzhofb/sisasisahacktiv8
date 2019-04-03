var plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

console.log("             ");

function myPop(array) {
  let deletedIndex = array.length - 1;
  let result = [];

  let deletedValue;

  for (let i = 0; i < array.length; i++) {
    if (i === deletedIndex) deletedValue = array[i];
    else result.push(array[i]);
  }

  return deletedValue;
}

function afterPop(array) {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }

  return result;
}

function popAgain(array) {
  let value = afterPop(array);
  return afterPop(value);
}

let myPlants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(myPop(myPlants));
console.log(afterPop(myPlants));
console.log(popAgain(myPlants));
