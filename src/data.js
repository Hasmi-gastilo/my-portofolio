import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// --- IMPORT GAMBAR ---
// Menggunakan garis miring (/) sesuai konfigurasi yang berhasil di laptopmu
import Tools1 from "/assets/tools/vscode.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools17 from "/assets/tools/php.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/premierepro.png"; // <--- INI YANG BARU DITAMBAHKAN

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
  { // <--- DATA BARU PREMIERE PRO
    id: 20,
    gambar: Tools20,
    nama: "Premiere Pro",
    ket: "Video Editor",
    dad: "2000",
  },
];

// --- DAFTAR PROYEK (Tetap sama seperti sebelumnya) ---
import Proyek1 from "/assets/proyek/project2.jpg";
import Proyek2 from "/assets/proyek/project1.jpg";
import Proyek3 from "/assets/proyek/project3.jpg";
import Proyek4 from "/assets/proyek/project4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/project6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1, 
    title: "Website Laporan Saham",
    subtitle: "Aplikasi laporan saham berbasis web dengan fitur unggah data Excel dan visualisasi statistik....",
    fullDescription: "Aplikasi Laporan Saham adalah sistem berbasis web yang digunakan untuk mengolah dan menampilkan data saham yang diunggah melalui file Excel. Aplikasi ini menyajikan grafik statistik, persentase perubahan, serta laporan performa saham secara bulanan hingga tahunan, sehingga memudahkan pengguna dalam melakukan analisis dan pemantauan data saham secara terstruktur dan informatif.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Hasmi-gastilo/Laporan_Saham",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2, 
    title: "Sistem Absensi Digital Berbasis QR Code",
    subtitle: "Aplikasi absensi digital berbasis QR Code untuk pencatatan kehadiran siswa secara real-time...",
    fullDescription: "Aplikasi Absensi Digital merupakan sistem berbasis QR Code yang dirancang untuk membantu proses pencatatan kehadiran secara lebih efisien dan akurat. Aplikasi ini memungkinkan pengguna melakukan absensi dengan mudah, menyimpan data secara terpusat, serta memudahkan pemantauan dan rekap kehadiran.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://script.google.com/macros/s/AKfycbz9qcSb2Oc-lSpigP78JzsuPsdUVcBdJv3KVZ7aQgMt-bEtYuYAUqVKJkjQ609DJONT/exec",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3, // Pastikan gambar ini sudah di-resize sesuai langkah 1
    title: "Website Cafe Shop", // Judul disesuaikan dengan gambar
    subtitle: "Website pemesanan kopi online dengan fitur menu interaktif dan manajemen pesanan...", 
    fullDescription: "Website Cafe Shop yang dirancang modern untuk memudahkan pelanggan melihat menu, memilih varian kopi, dan melakukan pemesanan secara online. Website ini dilengkapi dengan fitur keranjang belanja, perhitungan harga otomatis, dan desain responsif yang nyaman diakses melalui perangkat mobile maupun desktop.",
    borderColor: "#F59E0B", // Warna Oranye/Kuning (Biar beda dari Biru & Hijau)
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://hasmi-gastilo.github.io/Web_Cafe/", // Masukkan link Github/Web jika ada
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "Sebuah portofolio web interaktif yang menampilkan perjalanan profesional saya...",
    fullDescription:"Sebuah portofolio web interaktif yang menampilkan perjalanan profesional saya, keterampilan, dan proyek-proyek yang telah saya kerjakan. Website ini dirancang dengan antarmuka yang menarik dan responsif, memungkinkan pengunjung untuk menjelajahi informasi tentang saya dengan mudah di berbagai perangkat.",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription:"A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6, // Pastikan ini gambar yang sudah diedit pakai "Teknik Kanvas" di atas
    title: "Desain Grafis & Branding", // Judul lebih spesifik
    subtitle: "Kumpulan desain poster, flyer acara, dan materi promosi visual...",
    fullDescription: "Portofolio ini menampilkan berbagai karya desain grafis yang berfokus pada media publikasi dan branding. Mencakup desain poster acara (event), flyer promosi, konten media sosial, dan elemen visual lainnya. Setiap karya dibuat dengan memperhatikan komposisi, tipografi, dan estetika visual untuk menyampaikan pesan secara efektif dan menarik perhatian audiens.",
    borderColor: "#10B981", // Warna Hijau (Bisa diganti jika mau)
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "", // Masukkan link ke portofolio desain (jika ada)
    dad: "600",
  },
];