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

async function fetchData() {
  try {
    const response = await fetch("https://be-2-jakarta-5-production.up.railway.app/destinationPackage/get");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function updateDestinasiPackages() {
  const destinasiContainer = document.getElementById("destinasi-package");

  const destinasiData = await fetchData();

  const Link = [{ link_url: "bali.html" }, { link_url: "labuanbajo.html" }, { link_url: "bromo.html" }];
  destinasiData.forEach((destinasi, index) => {
    const card = document.createElement("div");
    card.classList.add("card-destinasi");

    card.innerHTML = `
      <img src="${destinasi.image_url}" />
      <h2>${destinasi.destination_name}</h2>
      ${generateStarRating(destinasi.destination_package_review)}
      <div class="price">RP.${destinasi.package_price}</div>
      <a href="${Link[index].link_url}" target="_blank" class="button-destinasi">Book Now</a>
    `;

    destinasiContainer.appendChild(card);
  });
  console.log(destinasiData);
}

function generateStarRating(rating) {
  const maxRating = 5;
  let starsHTML = "";

  for (let i = 1; i <= maxRating; i++) {
    const starClass = i <= rating ? "fa-solid fa-star fa-lg" : "fa-solid fa-star fa-lg";
    const starColor = i <= rating ? "color: #f09d0f" : "color: #9d9a9a";
    starsHTML += `<i class="${starClass}" style="${starColor}"></i>`;
  }

  return starsHTML;
}

async function newsdata() {
  try {
    const response = await fetch("https://be-2-jakarta-5-production.up.railway.app/news/get");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function updateNews() {
  const newsContainer = document.getElementById("berita");
  const newsData = await newsdata();

  newsData.forEach((news) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${news.img_url}" alt="${news.title}" />
      <div class="card-content">
        <h2 class="card-title">${news.title}</h2>
        <p class="card-description">${news.body}</p>
        <a href="${news.news_url}" target="_blank">Read More >>></a>
      </div>
    `;

    newsContainer.appendChild(card);
  });
}

async function ambilDataFormkontak() {
  // Mengambil nilai dari elemen formulir kontak
  const username = document.getElementById("name").value;
  const useremail = document.getElementById("email").value;
  const user_messange = document.getElementById("message").value;

  // Data yang akan dikirim ke server
  const dataformkontak = {
    username: username,
    useremail: useremail,
    user_messange: user_messange,
  };

  try {
    const response = await fetch("https://be-2-jakarta-5-production.up.railway.app/FAQ/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataformkontak),
    });
    if (response.ok) {
      console.log("Data berhasil dikirim ke server");
    } else {
      console.error("Gagal mengirim data ke server");
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  }
}


window.onload = function () {
  updateDestinasiPackages();
  updateNews();
};
