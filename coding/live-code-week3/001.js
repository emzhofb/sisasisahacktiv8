/*
==================================
Array Mastery: Love Me Not
==================================

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia 
suka atau tidak, perempuan tersebut membuat sebuah program.
Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/


function loveMeNot(params) {
    let love = 0;
    let hate = 0;
    for (let i = 0; i < params.length; i++) {
        if (params[i] === true) {
            love++;
        } else if (params[i] === false) {
            hate++;
        }
    }
    if (love === hate) {
        return 'GALAU';
    } else if (love > hate) {
        return "HE LOVES ME!"
    } else if (love < hate) {
        return "HE DOES NOT LOVE ME :(";
    }
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("
