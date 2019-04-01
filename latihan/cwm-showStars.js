showStars(5);

function showStars(rows) {
  let stars = "";

  for (let i = 0; i < rows; i++) {
    stars += "*";
    console.log(stars);
  }

  // for (let i = 0; i < rows; i++) {
  //   let stars = "";
  //   for (let j = 0; j <= i; j++) {
  //     stars += "*";
  //   }
  //   console.log(stars);
  // }
}
