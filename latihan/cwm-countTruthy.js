const array = [1, 2, 3, null, undefined, ""];
console.log(countTruthy(array));

function countTruthy(params) {
  let count = 0;
  for (let value of params) {
    if (value) count++;
  }
  return count;
}
