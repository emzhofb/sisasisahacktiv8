// Competencies: Mathematical Operation and Conditionals
/*
===============
Cafe Visitation
===============

Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money. Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai. Jika name tidak kosong, lanjut ke step ke 2.
Step 2. Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice. Jika age 17 tahun keatas, ia hanya boleh memesan anggur.
Step 3. Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000. Sesuai dengan pilihan minuman di step 2, maka pengunjung ini harus membayar sesuai harga minuman.
Jika money / uang yang ia miliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.". Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.

Ketentuan
=========
Diberikan variable name, age, dan money.
Dipersilahkan mengganti nilai dari 3 variable tersebut, sesuai data type yang cocok, namun dilarang mengganti nama variable.
WAJIB menggunakan Pseudocode
*/

// SKELETON CODE (Code Sample)

var name = "ikhda"; // silakan berikan nilai bebas
var age = 20; // silakan berikan nilai bebas
var money = 400000; // silakan berikan nilai bebas

// Buat code disini

if (name === undefined || name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  if (age < 17) {
    console.log("Anda hanya boleh memesan juice");
    if (money >= 50000) {
      money -= 50000;
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else if (age >= 17) {
    console.log("Anda hanya boleh memesan angur");
    if (money >= 300000) {
      money -= 300000;
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }

  console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
}
