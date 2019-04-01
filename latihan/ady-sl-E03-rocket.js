function persegi(param1, param2) {
  // your code here
  if (param1 === 0 || param2 === 0) return "invalid value";

  for (let j = 0; j < param2; j++) {
    let result = "";
    for (let i = 0; i < param1; i++) {
      if (i === 0 || i === param1 - 1) result += "#";
      else if (j === 0 || j === param2 - 1) result += "#";
      else result += " ";
    }
    console.log(result);
  }

  return "";
}

console.log(persegi(5, 7));

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6, 3));

/*
    ######
    #    #
    ######
*/

console.log(persegi(0, 7)); // invalid value
console.log(persegi(4, 0)); // invalid value
