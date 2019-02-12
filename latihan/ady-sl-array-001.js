/*
    ==================
    WordToArrayReverse
    ==================
    [INSTRUCTION]
    buatlah sebuah program yang mengconvert string menjadi array, yang di reverse
    posisinya berdasarkan per kata 
    [RULE]
    - dilarang menggunakan function bawaan javascript kecuali split
    [EXAMPLE]
    wordToArrayReverse("Hello my name is Dimas")
    output:["Dimas","is","name","my","Hello"]
    wordToArrayReverse("Lorem ipsum sit dolor amet")
    output:["amet","dolor","sit","ipsum","Lorem"]
*/

function wordToArrayReverse(str) {
    // your code here
    let mySplit = []
    let temp = ''
    for (let j = 0; j < str.length; j++) {
        if (str[j] !== ' ') {
            temp += str[j];
        }
        if (str[j+1] === ' ') {
            mySplit.push(temp);
            temp = '';
        }
    }
    let lastWord = ''
    for (let j = 0; j < str.length; j++) {
        if (str[j] === ' ') {
            lastWord = '';
        }
        if (str[j] !== ' ') {
            lastWord += str[j];
        }
    }
    mySplit.push(lastWord);
    let myReverse = [];
    for (let i = mySplit.length-1; i >= 0; i--) {
        myReverse.push(mySplit[i]);
    }
    console.log(myReverse);
}

wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]

wordToArrayReverse("Lorem ipsum sit dolor amet")
//["amet","dolor","sit","ipsum","Lorem"]