
import { Project } from "@/type";

export const projects: Project[] = [
  {
    slug: "cooperative-management-system",
    title: "Inventory & Cashier Management System",
    role: "Web Developer",
    date: "2024 - 2025",
    problem:
      "Proses pencatatan transaksi penjualan dan pengelolaan persediaan barang sebelumnya masih dilakukan secara manual. Metode tersebut membuat pencatatan transaksi, pemantauan stok, serta pengelolaan barang masuk dan keluar membutuhkan waktu dan proses yang lebih panjang. Oleh karena itu, diperlukan sistem berbasis web yang dapat mengintegrasikan aktivitas kasir dan manajemen inventaris dalam satu platform untuk mempermudah operasional, meningkatkan efisiensi pencatatan, serta membantu pengelolaan data transaksi dan persediaan secara lebih terstruktur",
    solution:
      "Mengembangkan aplikasi berbasis web yang mengintegrasikan sistem kasir dan manajemen inventaris dalam satu platform. Sistem dirancang untuk mempermudah pencatatan transaksi penjualan, pengelolaan data produk, pemantauan stok barang, serta pencatatan barang masuk dan keluar. Dengan mengintegrasikan proses kasir dan inventaris, aplikasi ini membantu menyederhanakan operasional koperasi, mengurangi pencatatan manual, dan mempermudah pengelolaan data transaksi serta persediaan.",
    architecture:
      "Dikembangkan menggunakan PHP, Laravel, dan MySQL dengan antarmuka HTML, CSS, JavaScript. Sistem mengintegrasikan pencatatan transaksi penjualan dengan pengelolaan persediaan.",
    description:
      "Aplikasi web terintegrasi untuk mendukung operasional koperasi melalui pengelolaan inventaris, transaksi kasir, pencatatan stok, dan laporan operasional.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Web Development",

    ],
    results: [
      "Mengintegrasikan pengelolaan inventaris dan transaksi kasir dalam satu aplikasi.",
      "Mempermudah pengelolaan produk, kategori, dan persediaan.",
      "Mendukung pencatatan barang masuk, barang keluar, dan transaksi penjualan.",
      "Menyediakan riwayat transaksi dan laporan operasional.",
      "Mengurangi ketergantungan pada pencatatan transaksi secara manual.",
    ],
    images: [
       {
        src: "/images/projects/loginSBA.png",
        alt: "Halaman login Inventory and Cashier Management System",
        caption: "Login Page",
      },
      {
        src: "/images/projects/dashboardsba.png",
        alt: "Dashboard utama sistem inventory dan kasir",
        caption: "Dashboard",
      },
      {
        src: "/images/projects/kategorisba.png",
        alt: "Halaman pengelolaan kategori barang",
        caption: "Category Management",
      },
      {
        src: "/images/projects/databarangsba.png",
        alt: "Halaman data barang dan pengelolaan inventaris",
        caption: "Product Management",
      },
      {
        src: "/images/projects/kasirsba.png",
        alt: "Halaman kasir dan transaksi penjualan",
        caption: "Cashier",
      },
      {
        src: "/images/projects/historysba.png",
        alt: "Halaman histori dan riwayat transaksi penjualan",
        caption: "Transaction History",
      },
        
    ],
    github: "",
    link: "",
  },

  {
    slug: "hosting-server-management",
    title: "HostingKita",
    role: "Web Developer",
    date: "2025",
    problem:
      "Proyek ini dikembangkan sebagai tugas akademik dari kampus untuk membangun platform berbasis web yang memudahkan pengguna dalam melihat layanan hosting, melakukan pemesanan server, serta mengelola layanan hosting melalui sistem yang terintegrasi. Pengembangan proyek ini bertujuan untuk memahami penerapan teknologi web dalam membangun layanan digital serta mengelola proses pemesanan dan administrasi server secara terstruktur.",
    solution:
      "Mengembangkan website pemesanan layanan hosting server serta panel pengelolaan server untuk mendukung proses pemesanan dan pengelolaan layanan.",
    architecture:
      "Mengembangkan platform berbasis web dengan memanfaatkan layanan AWS sebagai bagian dari infrastruktur cloud dan pengelolaan server.",
    description:
      "Platform web pemesanan hosting server yang dilengkapi panel pengelolaan server dengan memanfaatkan layanan cloud AWS.",
    technologies: [
      "AWS",
      "Cloud Computing",
      "Web Development",
      "Server Management",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    results: [
      "Mengembangkan website pemesanan layanan hosting server.",
      "Membangun panel pengelolaan server.",
      "Mengimplementasikan layanan cloud AWS.",
      "Mengintegrasikan proses pemesanan dan pengelolaan layanan server.",
    ],
    images: [
      {
        src: "/images/projects/hosting1.png",
        alt: "Halaman utama website HostingKita untuk pemesanan layanan hosting server",
        caption: "HostingKita",
      },
      {
        src: "/images/projects/hosting2.png",
        alt: "Halaman pemesanan layanan hosting server",
        caption: "Pemesanan Hosting",
      },
      {
      src: "/images/projects/hosting3.png",
        alt: "",
        caption: "pemesanan hosting server",
      },
        {
      src: "/images/projects/hosting4.png",
        alt: "",
        caption: "pemesanan hosting server",
      },
        {
      src: "/images/projects/hosting5.png",
        alt: "",
        caption: "pemesanan hosting server",
      },
        {
      src: "/images/projects/hosting6.png",
        alt: "",
        caption: "pemesanan hosting server",
      }
    ],
    link: "https://tiny-halva-43884b.netlify.app/",
  },

  {
    slug: "fuel-anomaly-detection",
    title: "transaction anomaly detection for subsidized fuel using Isolation Forest",
    role: "Machine Learning Developer",
    date: "2026",
    problem:
      "Pemeriksaan transaksi BBM bersubsidi dilakukan secara manual menggunakan Excel. Pemeriksaan transaksi satu per satu menyulitkan proses identifikasi transaksi dengan pola yang berpotensi tidak wajar.",
    solution:
      "Menerapkan Isolation Forest untuk mengidentifikasi kandidat transaksi dengan pola tidak biasa berdasarkan data transaksi. Hasil deteksi dilanjutkan dengan Rule-Based Validation untuk membantu menentukan transaksi yang perlu diperiksa lebih lanjut.",
    architecture:
      "Menggunakan Python, Pandas, dan Scikit-learn melalui tahapan preprocessing, feature engineering, Min-Max Scaling, Isolation Forest, Rule-Based Validation, serta visualisasi hasil menggunakan Streamlit.",
    description:
      "Aplikasi Machine Learning untuk menganalisis transaksi BBM bersubsidi dan mengidentifikasi transaksi yang berpotensi menyimpang menggunakan Isolation Forest dan validasi berbasis aturan.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Machine Learning",
      "laragon",
      "mysql",
    ],
    results: [
      "Melakukan preprocessing dan feature engineering pada data transaksi.",
      "Mengidentifikasi kandidat transaksi tidak wajar menggunakan Isolation Forest.",
      "Menggabungkan hasil deteksi dengan Rule-Based Validation.",
      "Menyajikan hasil analisis melalui dashboard visualisasi.",
      "Membantu mengidentifikasi transaksi yang memerlukan pemeriksaan lebih lanjut.",
    ],
    images: [
      {
        src: "/images/projects/dashboard-TA.png",
        alt: "Halaman utama aplikasi deteksi anomali transaksi BBM bersubsidi",
        caption: "Fuel Anomaly Detection",
      },
      {
        src: "/images/projects/ta1.png",
        alt: "",
        caption: "Dashboard Fuel Anomaly Detection",
      },
      {
        src: "/images/projects/ta2.png",
        alt: "",
        caption: "Visualisasi Hasil Deteksi",
      },
      {
        src: "/images/projects/ta3.png",
        alt: "",
        caption: "visualisasi rule-based validation",
      },
      {
        src: "/images/projects/ta4.png",
        alt: "",
        caption: "visualisasi isolation forest",
      },
      {
        src: "/images/projects/ta5.png",
        alt: "",
        caption: "hasil data anomali transaksi BBM bersubsidi",
      },
      {
        src: "/images/projects/ta6.png",
        alt: "",
        caption: "data kendaraan dan transaksi BBM bersubsidi",
      },
      {
        src: "/images/projects/ta7.png",
        alt: "",
        caption: "semua data transaksi BBM bersubsidi",
      }

    ],
  },

  {
    slug: "diabetes-prediction-system",
    title: "Diabetes Prediction System",
    role: "Machine Learning Developer",
    date: "2025",
    problem:
      "Pengolahan data parameter kesehatan membutuhkan pendekatan analisis berbasis data untuk membantu menghasilkan prediksi secara sistematis.",
    solution:
      "Mengembangkan aplikasi prediksi diabetes menggunakan Machine Learning dengan memanfaatkan parameter kesehatan sebagai masukan model.",
    architecture:
      "Menggunakan Python untuk pengolahan data dan penerapan model Machine Learning dalam proses prediksi berdasarkan parameter kesehatan.",
    description:
      "Aplikasi prediksi diabetes yang menerapkan Machine Learning untuk mengolah parameter kesehatan dan menghasilkan prediksi berdasarkan model.",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Processing",
      "Predictive Analytics",
      "steamlit",    
    ],
    results: [
      "Mengimplementasikan Machine Learning untuk prediksi diabetes.",
      "Mengolah parameter kesehatan sebagai input model.",
      "Menerapkan pendekatan analisis data dalam proses prediksi.",
    ],
    images: [
      {
        src: "/images/projects/diabetes.png",
        alt: "Halaman utama aplikasi prediksi diabetes",
      },
    ],
    github: "",
    link: "",
  },

  {
    slug: "perpustakaan-sekolah-berbasis-web",
    title: "Perpustakaan Sekolah Berbasis Web",
    role: "Web Developer",
    date: "2025",
    problem:
      "Manajemen data dan akses informasi perpustakaan sekolah memerlukan solusi digital yang dapat meningkatkan efisiensi dan kenyamanan pengguna.",
    solution:
      "Mengembangkan sistem perpustakaan sekolah berbasis web untuk memudahkan manajemen data dan akses informasi.",
    architecture:
      "Menggunakan teknologi web modern untuk mengembangkan sistem perpustakaan sekolah yang responsif dan user-friendly.",
    description:
      "Proyek pengembangan sistem perpustakaan sekolah berbasis web yang dirancang untuk meningkatkan efisiensi dan kenyamanan pengguna.",
    technologies: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "laravel",
      "mysql",
      "laragon",
    ],
    results: [
      "Mengimplementasikan sistem perpustakaan sekolah berbasis web.",
      "Meningkatkan efisiensi manajemen data perpustakaan.",
      "Memberikan akses informasi yang lebih mudah bagi pengguna.",
    ],
    images: [
      {
        src: "/images/projects/perpus1.png",
        alt: "Halaman utama sistem perpustakaan sekolah",
      },
      {
        src: "/images/projects/perpus2.png",
        alt: "Halaman daftar buku perpustakaan sekolah",
      },
      {
        src: "/images/projects/perpus3.png",
        alt: "Halaman detail buku perpustakaan sekolah",    
      },
      {
        src: "/images/projects/perpus4.png",
        alt: "Halaman peminjaman buku perpustakaan sekolah",
      },
      
    ],
  },
];
