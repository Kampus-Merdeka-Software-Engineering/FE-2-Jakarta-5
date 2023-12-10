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
  var quantity = document.getElementById("quantityInput").value;

  // Harga  per orang
  var hargaPerItem = 6000000;

  // Menghitung total harga
  var totalHarga = quantity * hargaPerItem;

  // Menampilkan total harga pada span dengan id 'totalHarga'
  //totalHarga.toLocaleString('id-ID'); digunakan untuk mengubah nilai totalHarga menjadi format string dengan pemisah ribuan dan menggunakan tanda desimal sesuai dengan konvensi bahasa Indonesia ('id-ID').
  document.getElementById("totalHarga-bali").innerText = totalHarga.toLocaleString("id-ID");
}

// Fungsi untuk menghitung total harga Di bromo
function hitungTotalbromo() {
  // Mendapatkan nilai jumlah pembelian dari input
  var quantity = document.getElementById("quantityInput-bromo").value;

  // Harga per orang
  var hargaPerItem = 3000000;

  // Menghitung total harga
  var totalHarga = quantity * hargaPerItem;

  // Menampilkan total harga pada span dengan id 'totalHarga'
  //totalHarga.toLocaleString('id-ID'); digunakan untuk mengubah nilai totalHarga menjadi format string dengan pemisah ribuan dan menggunakan tanda desimal sesuai dengan konvensi bahasa Indonesia ('id-ID').
  document.getElementById("totalHarga-bromo").innerText = totalHarga.toLocaleString("id-ID");
}

// Fungsi untuk menghitung total harga Di labuanbajo
function hitungTotallabuanbajo() {
  // Mendapatkan nilai jumlah pembelian dari input
  var quantity = document.getElementById("quantityInput-labuanbajo").value;

  // Harga per orang
  var hargaPerItem = 8500000;

  // Menghitung total harga
  var totalHarga = quantity * hargaPerItem;

  // Menampilkan total harga pada span dengan id 'totalHarga'
  //totalHarga.toLocaleString('id-ID'); digunakan untuk mengubah nilai totalHarga menjadi format string dengan pemisah ribuan dan menggunakan tanda desimal sesuai dengan konvensi bahasa Indonesia ('id-ID').
  document.getElementById("totalHarga-labuanbajo").innerText = totalHarga.toLocaleString("id-ID");
}

// Fungsi untuk menampilkan hasil pencarian berdasarkan kata  yang dimasukkan oleh pengguna
function showResults(searchTerm) {
  // Mendapatkan elemen kontainer hasil pencarian
  const resultsContainer = document.getElementById("search-results");
  // Mendapatkan elemen hasil pencarian spesifik
  const baliResults = document.getElementById("baliResults");
  const bromoResults = document.getElementById("bromoResults");
  const labuanResults = document.getElementById("labuanResults");

  // Mendapatkan elemen hasil pencarian yang tidak dikenal
  const uknownResults = document.getElementById("uknownResults");

  // Menghapus hasil pencarian sebelumnya
  resultsContainer.innerHTML = "";

  // Memeriksa apakah kata pencarian tidak kosong
  if (searchTerm.trim() !== "") {
    // Memeriksa apakah kata pencarian adalah "bali"
    if (searchTerm.toLowerCase() === "bali") {
      // Menampilkan hasil pencarian untuk "bali"
      baliResults.style.display = "block";

      // Menyembunyikan hasil pencarian yang tidak dikenal
      uknownResults.style.display = "none";
    }
    // Memeriksa apakah kata pencarian adalah "labuan"
    else if (searchTerm.toLowerCase() === "labuan") {
      // Menampilkan hasil pencarian untuk "labuan"
      labuanResults.style.display = "block";

      // Menyembunyikan hasil pencarian yang tidak dikenal
      uknownResults.style.display = "none";
    }
    // Memeriksa apakah kata pencarian adalah "bromo"
    else if (searchTerm.toLowerCase() === "bromo") {
      // Menampilkan hasil pencarian untuk "bromo"
      bromoResults.style.display = "block";

      // Menyembunyikan hasil pencarian yang tidak dikenal
      uknownResults.style.display = "none";
    }
    // Jika kata pencarian tidak sesuai dengan kriteria di atas
    else {
      // Menampilkan hasil pencarian yang tidak dikenal
      uknownResults.style.display = "block";

      // Menyembunyikan hasil pencarian spesifik lainnya
      baliResults.style.display = "none";
      bromoResults.style.display = "none";
      labuanResults.style.display = "none";
    }

    // Menampilkan kontainer hasil pencarian secara keseluruhan
    resultsContainer.style.display = "block";
  }
  // Jika kata pencarian kosong
  else {
    // Menyembunyikan semua hasil pencarian
    baliResults.style.display = "none";
    bromoResults.style.display = "none";
    labuanResults.style.display = "none";
    uknownResults.style.display = "none";

    // Menyembunyikan kontainer hasil pencarian secara keseluruhan
    resultsContainer.style.display = "none";
  }
}

async function getNewsData(params) {
  try {
    const response = await fetch("https://your-api-endpoint.com/news");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function renderNews() {
  const newsData = await getNewsData();

  const newsContainer = document.getElementById("berita");

  newsData.forEach((newsItem) => {
    const cardSearch = document.createElement("div");
    cardSearch.classList.add("card-search");

    const resultBox = document.createElement("div");
    resultBox.classList.add("result-box");

    const image = document.createElement("img");
    image.src = newsItem.img_url;
    image.alt = newsItem.title;
    image.classList.add("result-image");
    resultBox.appendChild(image);

    const title = document.createElement("h2");
    title.textContent = newsItem.title;
    title.classList.add("result-title");
    resultBox.appendChild(title);

    const price = document.createElement("div");
    price.textContent = newsItem.body;
    price.classList.add("result-price");
    resultBox.appendChild(price);

    const readMoreLink = document.createElement("a");
    readMoreLink.href = newsItem.news_url;
    readMoreLink.target = "_blank";
    readMoreLink.textContent = "Read More >>>";
    readMoreLink.classList.add("button-destinasi");
    resultBox.appendChild(readMoreLink);

    cardSearch.appendChild(resultBox);
    newsContainer.appendChild(cardSearch);
  });
}

window.onload = function () {
  renderNews();
};
