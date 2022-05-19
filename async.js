// contoh synchronous
// console.log("hello");
// console.log("1");
// console.log("2");
// console.log("3");

// contoh asynchronous
console.log("hello");
console.log("1");

setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// setInterval(() => {
//   console.log("setInterval");
// }, 2000);

//call back function async

function main(param1, param2, callBack) {
  console.log(
    "penjumlahan " + param1 + " + " + param2 + " = " + (param1 + param2)
  );
  callBack();
}

function myCallback() {
  console.log("hello callback");
}

main(1, 2, myCallback);

function p1() {
  console.log("p1 done");
}
function p2() {
  //setTimeout or delay for asynchronous simulation
  setTimeout(function () {
    console.log("p2 done");
  }, 0.3);
}
function p3() {
  console.log("p3 done");
}
p1();
// p2();
p3();

// promise
// state dalam Promise
// Pending ( sedang dalam proses )
// Fulfilled ( berhasil )
// Rejected ( gagal )

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 2;

  // some code (try to change x to 5)

  if (x == 0) {
    myResolve("jason punya cewe");
  } else {
    myReject("jason jomblo");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//async/await
// async → mengubah function menjadi asynchronous
// await → menunda eksekusi hingga proses asynchronous selesai
async function myFunction() {
  return "this is async Hello";
}

myFunction().then(
  function (value) {
    // myDisplayer(value);
    // myPromise.then(
    //   function (value) {
    //     myDisplayer(value);
    //   },
    //   function (error) {
    //     myDisplayer(error);
    //   }
    // );
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

// Sampai disini mungkin timbul beberapa pertanyaan.
// 1. Apakah javascript secara default mengeksekusi perintah dengan metode synchronous atau asynchronous ?
// 2. Bisakah kita membuat proses asynchronous ?
// 3. Dalam kasus apa teknik asynchronous digunakan ?
// Jawabannya :

// Javascript secara default mengeksekusi perintah secara synchronous,
// kecuali untuk beberapa hal seperti : ajax,websocket, worker, file, database, animasi dan beberapa hal lainya.

// Kita tidak bisa membuat proses asynchronous murni.
// Tapi untuk membuat simulasi iya kita bisa menggunakan fungsi setInternal dan setTimeout

// Teknik Asynchronous paling banyak digunakan mengelola komunikasi
// yang tidak mungkin sinkron atau harus menunggu seperti proses request ajax,
// operasi file, koneksi ke database, websocket,
// real time communication seperti pada aplikasi chating dan masih banyak lagi.
