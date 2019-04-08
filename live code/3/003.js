/*
  =============
  Shopping Cart 
  =============

  Saat nya berbelanja di harbolnas. kali ini TokoPC memiliki beberapa product 
  yang menarik.
  
  [INSTRUCTION]
  buatlah system cart untuk TokoPC dimana user memilih belanjaan dari 
  var products dengan cara memasukkan id product nya kedalam array, setelah 
  itu pesanan user di olah , di subtotal dengan cara qty nya di kali price,
  lalu di total semua pesanannya.

  [EXAMPLE]
  jika user memesan [3,2,2,1], maka User telah memesan 
  product-product dengan id: 
  - 3 ( RAM V-Gen 16GB ) sebanyak 1 qty 
    maka subtotalnya adalah price=> 1600000 * qty=> 1 = 1600000
  - 2 ( Harddisk Seagate 1TB ) sebanyak 2 qty
    maka subtotalnya adalah price=> 1500000 * qty=> 2 = 3000000 
  - 1 ( Motherboard Asus GTX 1000 ) sebanyak 1 qty 
    maka subtotalnya adalah price=> 1000000 * qty=> 1 = 1000000
  total nya adalah 5600000

  dengan contoh perhitungan diatas , maka outputnya adalah : 
  {
    title:"Nota Pembayaran"
    carts:{
      {
        id:3,
        title:"RAM V-Gen 16GB"
        qty:1,
        subtotal:1600000
      },
      {
        id:2,
        title:"Harddisk Seagate 1TB"
        qty:2,
        subtotal:3000000
      },
      {
        id:1,
        title:"Motherboard Asus GTX 1000"
        qty:1,
        subtotal:1000000
      }
    },
    total:5600000
  } 

  [NOTE]
  - product di dalam cart , tidak berurutan tidak apa - apa 

  [RULE]
  - Dilarang menggunakan build in function array apapun kecuali push() 
  - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
  - Dilarang menggunakan regex .match dan lainnya!
  - Dilarang menggunakan built in function .indexOf() dan .include()

*/
var products = [
  {
    id: 1,
    title: "Motherboard Asus GTX 1000",
    price: 1000000
  },
  {
    id: 2,
    title: "Harddisk Seagate 1TB",
    price: 1500000
  },
  {
    id: 3,
    title: "RAM V-Gen 16GB",
    price: 1600000
  },
  {
    id: 4,
    title: "Monitor Samsung 15 inch",
    price: 1300000
  }
];

function cart(shops) {
  // your code here
  let result = {};
  result.title = "Nota Pembayaran";
  result.carts = [];

  if (shops.length === 0) return "Anda harus memilih produk";
  else {
    let notResult = [];

    for (let i = 0; i < shops.length; i++) {
      // console.log(shops[i]);
      // console.log(products[0].id);
      let temp = {};
      temp.id = 0;
      temp.title = "";
      temp.qty = 0;
      temp.subtotal = 0;
      for (let j = 0; j < products.length; j++) {
        if (shops[i] === products[j].id) {
          // console.log(products[j]);
          temp.id = products[j].id;
          temp.title = products[j].title;
          temp.subtotal += products[j].price;
          temp.qty++;
        }
      }
      notResult.push(temp);
    }

    // console.log(notResult);
    for (let i = 0; i < notResult.length; i++) {
      // console.log(notResult[i].id);
      for (let j = i + 1; j < notResult.length; j++) {
        if (notResult[i].id === notResult[j].id) {
          notResult[i].qty++;
        }
      }
      notResult[i].subtotal *= notResult[i].qty;
    }
    return result;
  }
}

console.log(cart([1, 1, 2, 3, 3, 3]));
/* 
    {
      title:"Nota Pembayaran"
      carts:[
        {
          id:1,
          title:"Motherboard Asus GTX 1000"
          qty:2,
          subtotal:2000000
        },
        {
          id:2,
          title:"Harddisk Seagate 1TB"
          qty:1,
          subtotal:1500000
        },
        {
          id:3,
          title:"RAM V-Gen 16GB"
          qty:3,
          subtotal:4800000
        }
      ],
      total:8300000
    }
  */
// console.log("\n");
// console.log(cart([1, 3, 2, 1, 4, 3]));
/* 
    { title: 'Nota Pembayaran',
    cart:
    [{ id: 1,
      title: 'Motherboard Asus GTX 1000',
      qty: 2,
      subtotal: 2000000 },
      { id: 3, title: 'RAM V-Gen 16GB', qty: 2, subtotal: 3200000 },
      { id: 2,
        title: 'Harddisk Seagate 1TB',
        qty: 1,
        subtotal: 1500000 
      },
      { id: 4,
        title: 'Monitor Samsung 15 inch',
        qty: 1,
        subtotal: 1300000 
    }],
    total: 8000000 }
  */

// console.log("\n");
// console.log(cart([]));
// anda harus memilih product
