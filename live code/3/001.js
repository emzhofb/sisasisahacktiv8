/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung 
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan 
    Golongan `brutoSalary` nya masing - masing.
    pengertian : 
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus 
    salaryNett` = `brutoSalary` - (`brutoSalary` * `Tax`) - ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) 
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya : 
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika : 
    `brutoSalary` => 9000000 keatas , maka : golongan I  
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II 
    `brutoSalary` => 3000000 - 5999999, maka : golongan III 
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar : 
    - `Tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `brutoSalary` * `Tax` 

    Golongan II
    diwajibkan membayar : 
    - `Tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `brutoSalary` * `Tax`

    Golongan III
    diwajibkan membayar :
    - `Tax` 2% dari `brutoSalary` 
    - BPJS 3% dari `brutoSalary` setelah dikurangi `brutoSalary` * `Tax`

    Golongan IV 
    diwajibkan membayar : 
    - tidak dikenakan `Tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya 
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input : 
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :  
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"
    
    
    **WAJIB MENGGUNAKAN PSEUDOCODE** 
    
    [YOUR PSEUDOCODE HERE]

    STORE 'tax' with any value
    STORE 'nett' with any value
    STORE 'bpjs' with any value
    STORE 'a' with any value
    STORE 'b' with any value
    STORE 'totalBPJS' with any value

    IF 'brutoSalary' < 1000000
        DISPLAY "Gaji anda dibawah standar perusahaan"
    IF 'brutoSalary' >= 9000000
        CALCULATE 'tax', 'bpjs', and 'totalBPJS'
    IF 'brutoSalary' >= 6000000 && 'brutoSalary' < 9000000
        CALCULATE 'tax', 'bpjs', and 'totalBPJS'
    IF 'brutoSalary' >= 3000000 && 'brutoSalary' < 6000000
        CALCULATE 'tax', 'bpjs', and 'totalBPJS'
    IF 'brutoSalary' >= 1000000 && 'brutoSalary' < 3000000
        CALCULATE 'tax', 'bpjs', and 'totalBPJS'
    
    DISPLAY 'nett' and 'totalBPJS'

    */
   
function salaryRangeCalculator(brutoSalary,months) {
    // your code here

}

var brutoSalary = 5000000
var months = 3
console.log(salaryRangeCalculator(brutoSalary,months))
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000


