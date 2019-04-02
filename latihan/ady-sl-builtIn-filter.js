var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

function myFilter(array, minLength) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > minLength) result.push(array[i]);
  }
  console.log(result);
}
myFilter(words, 6);
