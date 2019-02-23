/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
    // your code here
    let result = ''
    if (param % 2 === 0) {
        result = 'invalid input'
    } else {
        let middle = (param / 2) - 0.5
        for (let i = 0; i < param; i++) {
            let temp = ''
            for (let j = 0; j < param; j++) {
                if (i === middle) {
                    temp += '*'
                } else if (j === middle) {
                    temp += '*'
                } else {
                    temp += ' '
                }
            }
            console.log(temp)
        }
    }
    return result
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input