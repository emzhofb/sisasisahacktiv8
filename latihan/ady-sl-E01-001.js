function soal1(param) {
    // your code here
    let result = []
    for (let i = 0; i < param; i++) {
        if (param % 2 === 0) {
            if (i === param/2 || i === (param/2)-1) {
                result.push('*')
            } else {
                result.push(' ')
            }
        } else {
            if (i === (param/2)-0.5) {
                result.push('*')
            } else {
                result.push(' ')
            }
        }
    }
    if (result.length === 0) return 'invalid input'
    else return result
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']
