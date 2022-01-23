/*
Nama: Rahman Insani
Facilitator: Fadhlan Fariz Makarim
*/

function tambah(firsNumber = 0, secondNumber = 0) {
  // lengkapi kode di bawah ini
  if (typeof firsNumber !== "number" || typeof secondNumber !== "number") return "Please Insert Number Parameter";
  return firsNumber + secondNumber;
}

// TEST CASE
console.log(tambah(0, 0)); // 0
console.log(tambah(1, 1)); // 2
console.log(tambah(1, 2)); // 3
console.log(tambah(100, 0)); // 100
console.log(tambah(0, 54301)); // 54301

console.log(tambah()); // 0
console.log(tambah("", 1)); // Please Insert Number Parameter
console.log(tambah("", "Hello")); // Please Insert Number Parameter
console.log(tambah([], {})); // Please Insert Number Parameter
