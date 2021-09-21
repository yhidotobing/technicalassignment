//? No. 1
let divisi = "HR";

if (divisi === "HR") {
  console.log(
    `Jika saya sebagai ${divisi} maka tugas saya adalah melakukan rekrutment untuk calon pegawai baru`
  );
} else if (divisi === "Front End Engineer") {
  console.log(
    `Jika saya sebagai ${divisi} maka tugas saya berhubungan dengan tampilan website`
  );
} else if (divisi === "Back End Engineer") {
  console.log(
    `Jika saya sebagai ${divisi} maka tugas saya berhubungan dengan data pada website`
  );
}

//? No.2
let a = 4;
let b = 5;

a > b
  ? "Nilai a lebih besar dari b"
  : a < b
  ? "Nilai b lebih besar dari a"
  : "Nilai a sama dengan b";

//? No.3
let hari = 1;

switch (hari) {
  case 1:
    console.log("Minggu");
    break;
  case 2:
    console.log("Senin");
    break;
  case 3:
    console.log("Selasa");
    break;
  case 4:
    console.log("Rabu");
    break;
  case 5:
    console.log("Kamis");
    break;
  case 6:
    console.log("Jumat");
    break;
  case 7:
    console.log("Sabtu");
    break;
}

//? No. 4
let analog = "UP";

switch (analog) {
  case "UP":
    console.log("Karakter berjalan keatas");
    break;
  case "RIGHT":
    console.log("Karakter berjalan kekanan");
    break;
  case "BOTTOM":
    console.log("Karakter berjalan kebawah");
    break;
  case "LEFT":
    console.log("Karakter berjalan kekiri");
    break;
}

let tes = 1;
