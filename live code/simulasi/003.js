/*
==================================
Array Mastery: Average Length Word
==================================

Nama:________

[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']

*/

function averageLengthWord(words) {
  // Code here
  let result = [];
  let temp = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      temp += words[i];
    } else {
      result.push(temp);
      temp = "";
    }
  }
  let last = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      last = "";
      i++;
    }
    last += words[i];
  }

  result.push(last);

  let totalLength = 0;

  for (let i = 0; i < result.length; i++) {
    totalLength += result[i].length;
  }

  const average = Math.round(totalLength / result.length);
  let listWord = [];

  for (let i = 0; i < result.length; i++) {
    if (average === result[i].length) {
      listWord.push(result[i]);
    }
  }

  return listWord;
}

console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(
  averageLengthWord("You dont know what you have until you lose it!")
); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord("I am diligent")); // []
