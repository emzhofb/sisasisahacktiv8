/*
Logic Challenge - Change Me!
Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
Code
*/
function changeMe(arr) {
  // you can only write your code here!
  let result = {
    firstName: '',
    lastName: '',
    gender: '',
    age: 0
  }
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number++;
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === arr[i][0]) {
            result.firstName = arr[i][j]
        }
        if (arr[i][j] === arr[i][1]) {
            result.lastName = arr[i][j]
        }
        if (arr[i][j] === arr[i][2]) {
            result.gender = arr[i][j]
        }
        if (arr[i][3] !== undefined || arr[i][3] < 2019) {
            result.age = 2019 - arr[i][j]
        } else {
            result.age = 'Invalid Birth Number'
        }
    }
    console.log(number + '. ' + arr[i][0] + ' ' + arr[i][1] + ':')
    console.log(result)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""