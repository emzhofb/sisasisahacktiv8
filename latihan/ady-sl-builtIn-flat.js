function myFlat(array, dimension) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === undefined) {
      result.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j].length === undefined) {
          result.push(array[i][j]);
        } else if (dimension > 1) {
          for (let k = 0; k < array[i][j].length; k++) {
            if (array[i][j][k].length === undefined) {
              result.push(array[i][j][k]);
            }
          }
        } else {
          result.push(array[i][j]);
        }
      }
    }
  }

  return result;
}

var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4]
console.log(myFlat(arr1));

var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]
console.log(myFlat(arr2));

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]
console.log(myFlat(arr3, 2));
