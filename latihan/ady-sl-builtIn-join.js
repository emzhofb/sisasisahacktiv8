function myJoin(array, joining) {
  let symbol = "";
  if (joining === undefined) symbol = ",";
  else symbol = joining;

  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i < array.length - 1) result += array[i] + symbol;
    else result += array[i];
  }
  return result;
}

var elements = ["Fire", "Wind", "Rain"];

console.log(elements.join());
// expected output: "Fire,Wind,Rain"
console.log(myJoin(elements));

console.log(elements.join(""));
// expected output: "FireWindRain"
console.log(myJoin(elements, ""));

console.log(elements.join("-"));
// expected output: "Fire-Wind-Rain"
console.log(myJoin(elements, "-"));
