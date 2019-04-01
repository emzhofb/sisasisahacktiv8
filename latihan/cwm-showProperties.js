const anime = {
  title: "Saenai Heroine no Sodatekata",
  releaseYear: 2015,
  rating: 4.5,
  director: "Fumiaki Maruto"
};

showProperties(anime);

function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === "string") {
      console.log(key, object[key]);
    }
  }
}
