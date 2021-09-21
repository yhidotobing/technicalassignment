//? No. 1
for (let i = 1; i <= 100; i++) {
  console.log(`User ke ${i}`);
}

//? No.2
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//? No.3
for (let i = 0; i <= 20; i++) {
  i % 2 === 0
    ? console.log(i + " Angka Genap")
    : console.log(i + " Angka Ganjil");
}
``;

//? No.4
let banyakKonfirmasi = 0;
let konfirmasi;
do {
  konfirmasi = confirm("Apakah anda mau mengulang lagi?");
  if (konfirmasi) {
    banyakKonfirmasi++;
  }
} while (konfirmasi);
alert(`anda sudah mengulang sebanyak ${banyakKonfirmasi}`);

//? No.5
let inputan;
do {
  inputan = prompt("Sebutkan kepanjangan nama IB?");
} while (inputan !== "Impact Byte");
