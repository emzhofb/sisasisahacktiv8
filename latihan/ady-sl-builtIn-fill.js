var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

function myFill1(array, pattern) {
  let result = [];
  let fill = 0;
  let fromPos = 1;
  let toPos = 2;

  for (let i = 0; i < pattern.length; i++) {
    if (i === fill) fill = pattern[i];
    else if (i === fromPos) fromPos = pattern[i];
    else if (i === toPos) toPos = pattern[i];
  }

  for (let i = 0; i < array.length; i++) {
    if (i >= fromPos && i <= toPos) result.push(fill);
    else result.push(array[i]);
  }
  console.log(result);
}
myFill1(array1, [0, 2, 4]);
console.log("             ");

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

function myFill2(array, pattern) {
  let result = [];
  let fill = 0;
  let fromPos = 1;
  let toPos = 2;

  for (let i = 0; i < pattern.length; i++) {
    if (i === fill) fill = pattern[i];
    else if (i === fromPos) fromPos = pattern[i];
    else if (i === toPos) toPos = pattern[i];
  }

  for (let i = 0; i < array.length; i++) {
    if (i >= fromPos && i <= toPos) result.push(fill);
    else result.push(array[i]);
  }
  console.log(result);
}
myFill2(array1, [5, 1]);
console.log("             ");

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

function myFill3(array, pattern) {
  let result = [];
  let fill = 0;
  let fromPos = 1;
  let toPos = 2;

  for (let i = 0; i < pattern.length; i++) {
    if (i === fill) fill = pattern[i];
    else if (i === fromPos) fromPos = pattern[i];
    else if (i === toPos) toPos = pattern[i];
  }

  for (let i = 0; i < array.length; i++) {
    if (i >= fromPos && i <= toPos) result.push(fill);
    else result.push(array[i]);
  }
  console.log(result);
}
myFill3(array1, [6]);
