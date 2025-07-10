const formKonsultasi = document.getElementById("formKonsultasi");
const areaForm = document.getElementById("areaForm");
const areaNota = document.getElementById("areaNota");
const pesanError = document.getElementById("pesanError");
const buatLagiBtn = document.getElementById("buatLagi");

// Event listener untuk tombol 'submit'
formKonsultasi.addEventListener("submit", function (event) {
  event.preventDefault();
  pesanError.style.display = "none";

  // Mengambil semua nilai dari form
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const telepon = document.getElementById("telepon").value.trim();
  const layanan = document.getElementById("layanan").value;
  const keluhan = document.getElementById("keluhan").value.trim();
  const dokumenInput = document.getElementById("dokumen");

  // Validasi
  if (
    nama === "" ||
    email === "" ||
    telepon === "" ||
    layanan === "" ||
    keluhan === ""
  ) {
    pesanError.textContent = "Harap isi semua kolom yang wajib diisi.";
    pesanError.style.display = "block";
    return;
  }

  // --- Jika validasi sukses, proses ke pembuatan nota ---

  // Mengisi data ke dalam elemen-elemen Nota
  document.getElementById("notaNama").textContent = nama;
  document.getElementById("notaEmail").textContent = email;
  document.getElementById("notaTelepon").textContent = telepon;
  document.getElementById("notaLayanan").textContent = layanan;
  document.getElementById("notaKeluhan").textContent = keluhan;

  if (dokumenInput.files.length > 0) {
    document.getElementById("notaDokumen").textContent =
      dokumenInput.files[0].name;
  } else {
    document.getElementById("notaDokumen").textContent = "Tidak diunggah";
  }

  // Sembunyikan form dan tampilkan nota
  areaForm.style.display = "none";
  areaNota.style.display = "block";
});

// Event listener untuk tombol 'Buat Konsultasi Baru'
buatLagiBtn.addEventListener("click", function () {
  // Sembunyikan nota dan tampilkan lagi form
  areaNota.style.display = "none";
  areaForm.style.display = "block";

  // Kosongkan form dan info file
  formKonsultasi.reset();
  document.getElementById("infoFile").innerHTML = "";
});

// Event listener untuk info file (tetap sama)
document.getElementById("dokumen").addEventListener("change", function () {
  if (this.files.length > 0) {
    const namaFile = this.files[0].name;
    const ukuranFile = (this.files[0].size / 1024).toFixed(2);
    document.getElementById(
      "infoFile"
    ).innerHTML = `File dipilih: <strong>${namaFile}</strong> (${ukuranFile} KB)`;
  } else {
    document.getElementById("infoFile").innerHTML = "";
  }
});
