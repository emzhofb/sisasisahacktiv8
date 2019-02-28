/*
    ============
    PAIR PROJECT 
    ============

    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ). 
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu 
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang 
    BERBEDA. 
    
    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama 
    tidak lebih dari 2 orang

    ketentuan : 
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - tambahkan test case lain bila diperlukan 

    [Example]
    input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
    output : ["asep and baqi","jajang and iqbal","junaedi and toni"]

    [RULE]
    - dilarang menggunakan build in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()
    
*/

function pairProject( students ) {
    // your code here
    if (students.length % 2 === 1) {
        return 'Jumlah murid harus genap';
    } else {
        let result = [];
        for (let i = 0; i < students.length-1; i++) {
            let temp = '';
            let j = i+1
            if (students[i][0] !== students[j][0]) {
                temp = students[i] + ' and ' + students[j]
                result.push(temp)
                i++
            }
        }
        return result;
    }
}

console.log( pairProject(["Aries","Awtian","Momotaro","Yoki","Icha","Wika","Wawan","Mimin","Ryan","Yogi"]) )
/* 
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log( pairProject(["asep","baqi","jajang","junaedi","iqbal","toni"]) )
/* 
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/