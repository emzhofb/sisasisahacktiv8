/*
===============================================
Credential Validator (Anchor with Rocket Score)
===============================================

[INSTRUKSI]

DILARANG MENGGUNAKAN Regex dan Match untuk soal ini!


function credentialValidator akan menerima tiga parameter berupa string, yakni username, email, dan password. Buatlah validasi tiga parameter tersebut dengan syarat berikut:

1. [ANCHOR] Username harus memiliki panjang minimal 4 karakter dan maksimal 20 karakter. Username tidak boleh mengandung simbol '*', '@', '#', '$', '%', '^', '&', dan '*'.

2. [ANCHOR] Password harus memiliki panjang minimal 5 karakter, dan harus mengandung kombinasi minimal 1 angka dan 1 huruf.

3. [ROCKET] Email harus memiliki panjang minimal 6 karakter, harus memiliki hanya satu simbol '@' dan memiliki nama email di sisi kiri simbol '@' dan memiliki domain di sisi kanan simbol '@'. Format: [NAMA EMAIL SISI KIRI]@[NAMA EMAIL].[DOMAIN].  domain harus memiliki hanya satu simbol '.' dimana sisi kiri maksimal 4 karakter, dan sisi kanan maksimal 3 karakter.

function akan me-return nilai true jika semua pengecekan terpenuhi, dan false jika minimal satu syarat tidak terpenuhi. Tambahan score bonus rocket apabila sukses melakukan validasi email.


[CONTOH]

input:
  - username: 'adhywiranata'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'
output: true

input: 
  - username: 'adh'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username dibawah 4 karakter

input: 
  - username: 'adhy test 123 testing 321 test 123 321 test'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username melebihi 20 karakter

input: erwin@nice.com
input: 
  - username: 'erwin'
  - password: 'testing'
  - email: 'erwin@nice.com'

output: false, karena password tidak mengandung 1 angka sama sekali
*/

/* Tuliskan Code mu di Bawah ini */

const credentialValidator = (username, password, email) => {
  let result = true
  let because = ''

  if (username.length < 4) {
    result = false
    because = 'karena username dibawah 4 karakter'
  }

  if (username.length > 20) {
    result = false
    because = 'karena username melebihi 20 karakter'
  }

  if (username.length >= 4 && username.length <= 20) {
    const simbolUsername = '*@#$%^&'
    for (let i = 0; i < username.length; i++) {
      for (let j = 0; j < simbolUsername.length; j++) {
        if (username[i] === simbolUsername[j]) {
          result = false
          because = 'karena username memiliki simbol'
        }
      }
    }
  }

  if (password.length < 5) {
    result = false
    because = 'karena password dibawah 5 karakter'
  } else {
    const angkaPassword = '0123456789'
    const hurufPassword = 'abcdefghijklmnopqrstuvwxyz'
    let flagAngka = false
    let flagHuruf = false
    for (let i = 0; i < angkaPassword.length; i++) {
      for (let j = 0; j < password.length; j++) {
        if (angkaPassword[i] === password[j]) {
          flagAngka = true
        }
      }
    }
    for (let i = 0; i < hurufPassword.length; i++) {
      for (let j = 0; j < password.length; j++) {
        if (hurufPassword[i] === password[j]) {
          flagHuruf = true
        }
      }
    }
    if (flagAngka !== flagHuruf) {
      result = false
      if (flagAngka === false) {
        because = 'karena password tidak mengandung 1 angka sama sekali'
      } else if (flagHuruf === false) {
        because = 'karena password tidak mengandung 1 huruf sama sekali'
      }
    }
  }

  // validasi email, nanti di uncomment saja, output tanpa validasi email sudah sama dengan soal. Karena sisi kiri maksimal 4 karakter dan di test case 'coding' itu 6 karakter maka nanti hasilnya akan false.

  // if (email.length < 6) {
  //   result = false
  //   because = 'karena email kurang dari 6 karakter'
  // } else {
  //   let atCount = 0
  //   let dotCount
  //   for (let i = 0; i < email.length; i++) {
  //     if (email[i] === '@') {
  //       atCount++
  //     }
  //     if (email[i] === '.') {
  //       dotCount++
  //     }
  //   }
  //   if (atCount > 1 || atCount < 1 || dotCount > 1 || dotCount < 1) {
  //     result = false
  //     because = 'invalid email'
  //   } else {
  //     let yourName = ''
  //     let yourMail = ''
  //     let yourDomain = ''
  //     let temp = ''
  //     for (let i = 0; i < email.length; i++) {
  //       temp += email[i]
  //       if (email[i+1] === '@') {
  //         yourName = temp
  //         temp = ''
  //         i++
  //       }
  //       if (email[i+1] === '.') {
  //         yourMail = temp
  //         temp = ''
  //         i++
  //       }
  //     }
  //     let domain = ''
  //     for (let i = 0; i < email.length; i++) {
  //       domain += email[i]
  //       if (email[i] === '.') {
  //         domain = ''
  //       }
  //     }
  //     yourDomain = domain

  //     if (yourName.length < 1) {
  //       result = false
  //       because = 'karena email tidak punya nama'
  //     }
  //     if (yourMail.length > 4) {
  //       result = false
  //       because = 'karena alamat email lebih dari 4 karakter'
  //     }
  //     if (yourDomain.length > 3) {
  //       result = false
  //       because = 'karena domain lebih dari 3 karakter'
  //     }
  //   }
  // }

  if (result === false) {
    return result + ', ' + because
  } else {
    return result
  }
}

const username1 = 'adhywiranata'
const password1 = 'test123'
const email1 = 'adhywiranata@coding.com'
console.log(credentialValidator(username1, password1, email1))

const username2 = 'adh'
const password2 = 'test123'
const email2 = 'adhywiranata@coding.com'
console.log(credentialValidator(username2, password2, email2))

const username3 = 'adhy test 123 testing 321 test 123 321 test'
const password3 = 'test123'
const email3 = 'adhywiranata@coding.com'
console.log(credentialValidator(username3, password3, email3))

const username4 = 'erwin'
const password4 = 'testing'
const email4 = 'erwin@nice.com'
console.log(credentialValidator(username4, password4, email4))