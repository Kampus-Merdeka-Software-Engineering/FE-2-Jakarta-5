const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Mendapatkan referensi ke elemen <nav>
let nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("nav-content");
});

// Menambahkan event listener untuk event scroll
window.addEventListener("scroll", function () {
  // Cek apakah nilai scroll lebih besar dari 100 piksel
  if (document.documentElement.scrollTop > 100) {
    // Jika ya, tambahkan kelas "sticky"
    nav.classList.add("sticky");
  } else {
    // Jika tidak, hapus kelas "sticky"
    nav.classList.remove("sticky");
  }
});

// Fungsi untuk menghitung total harga Di bali
function hitungTotalbali() {
  // Mendapatkan nilai jumlah pembelian dari input
  var quantity = document.getElementById('quantityInput').value;

  // Harga  per orang
  var hargaPerItem = 6000000;

  // Menghitung total harga
  var totalHarga = quantity * hargaPerItem;

  // Menampilkan total harga pada span dengan id 'totalHarga'
  //totalHarga.toLocaleString('id-ID'); digunakan untuk mengubah nilai totalHarga menjadi format string dengan pemisah ribuan dan menggunakan tanda desimal sesuai dengan konvensi bahasa Indonesia ('id-ID').
  document.getElementById('totalHarga-bali').innerText = totalHarga.toLocaleString('id-ID');
}


// Fungsi untuk menghitung total harga Di bromo
function hitungTotalbromo() {
  // Mendapatkan nilai jumlah pembelian dari input
  var quantity = document.getElementById('quantityInput-bromo').value;

  // Harga per orang
  var hargaPerItem = 3000000;

  // Menghitung total harga
  var totalHarga = quantity * hargaPerItem;

  // Menampilkan total harga pada span dengan id 'totalHarga'
  //totalHarga.toLocaleString('id-ID'); digunakan untuk mengubah nilai totalHarga menjadi format string dengan pemisah ribuan dan menggunakan tanda desimal sesuai dengan konvensi bahasa Indonesia ('id-ID').
  document.getElementById('totalHarga-bromo').innerText = totalHarga.toLocaleString('id-ID');
}



// Fungsi untuk menghitung total harga Di bromo
function hitungTotallabuanbajo() {
  // Mendapatkan nilai jumlah pembelian dari input
  var quantity = document.getElementById('quantityInput-labuanbajo').value;

  // Harga per orang
  var hargaPerItem = 8500000;

  // Menghitung total harga
  var totalHarga = quantity * hargaPerItem;

  // Menampilkan total harga pada span dengan id 'totalHarga'
  //totalHarga.toLocaleString('id-ID'); digunakan untuk mengubah nilai totalHarga menjadi format string dengan pemisah ribuan dan menggunakan tanda desimal sesuai dengan konvensi bahasa Indonesia ('id-ID').
  document.getElementById('totalHarga-labuanbajo').innerText = totalHarga.toLocaleString('id-ID');
}
