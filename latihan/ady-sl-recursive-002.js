/*
   ====================
   Palindrome Recursive
   ====================
   [INSTRUCTION]
   buatlah sebuah program untuk mendeteksi sebuah kata palindrome atau bukan 
   dengan menggunakan methode recursive
   - jika sebuah kata atau kalimat palindrome maka outputnya adalah : true
   - jika sebuah kata atau kalimat bukan palindrome maka outputnya adalah : false 
   [EXAMPLE]
   palindromeRecursive("kasur ini rusak") 
   output: true
   palindromeRecursive("nababan")
   output: true
   
   palindromeRecursive("makan")
   output: false
*/

function palindromeRecursive(str) {
  // your code here
  if (str.length === 1) return str[0];

  let palindrome = str[str.length - 1] + palindromeRecursive(str.slice(0, -1));

  return palindrome;
}

palindromeRecursive("kasur ini rusak"); // true

// palindromeRecursive("nababan") // true

// palindromeRecursive("makan") // false
