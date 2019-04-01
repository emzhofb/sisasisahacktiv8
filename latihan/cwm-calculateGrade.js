// Average from marks is 70

/*
  Table
    0-59 = E
    60-69 = D
    70-79 = C
    80-89 = B
    90-100 = A
*/

const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(params) {
  const average = calculateAverage(params);
  let result;

  if (average < 60) result = "E";
  else if (average < 70) result = "D";
  else if (average < 80) result = "C";
  else if (average < 90) result = "B";
  else result = "A";

  return result;
}

function calculateAverage(parameter) {
  let total = 0;
  for (let i = 0; i < parameter.length; i++) {
    total += parameter[i];
  }

  const average = total / parameter.length;
  return average;
}
