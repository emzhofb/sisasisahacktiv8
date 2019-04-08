/*
 *****
 *****
 *****
 *****
 *****
 */

function showStarsOne(parameter) {
  for (let i = 0; i < parameter; i++) {
    let result = "";
    for (let j = 0; j < parameter; j++) {
      result += "*";
    }
    console.log(result);
  }
}

showStarsOne(5);

/*
 *****
 *   *
 *   *
 *   *
 *****
 */

function showStarsOne(parameter) {
  // your code goes here
  for (let i = 0; i < parameter; i++) {
    let result = "";
    for (let j = 0; j < parameter; j++) {
      if (j === 0) result += "*";
      else if (j === parameter - 1) result += "*";
      else if (i === 0) result += "*";
      else if (i === parameter - 1) result += "*";
      else result += " ";
    }
    console.log(result);
  }
}

/*
 *
 **
 ***
 ****
 *****
 */

function showStarsTwo(parameter) {
  for (let i = 0; i < parameter; i++) {
    let result = "*";
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }
}

showStarsTwo(5);

/*
 *
 **
 * *
 *  *
 *****
 */

function showStarsFour(parameter) {
  // your code goes here
  for (let i = 0; i < parameter; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      if (i === j) result += "*";
      else if (j === 0) result += "*";
      else if (i === parameter - 1) result += "*";
      else result += " ";
    }
    console.log(result);
  }
}

showStarsFour(5);

/*
 *****
 ****
 ***
 **
 *
 */

function showStarsFour(parameter) {
  // your code goes here
  for (let i = parameter - 1; i >= 0; i--) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    console.log(result);
  }
}

showStarsFour(5);
