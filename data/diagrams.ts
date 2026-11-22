
export interface DiagramItem {
  title: string;
  category: string;
  project: string;
  description: string;
  image: string;
  year: string;
}

const diagrams: DiagramItem[] = [
  {
    title: "Context Diagram Level 0",
    category: "System Analysis",
    project: "Library Management System",
    description: "Gambaran umum sistem perpustakaan beserta hubungan sistem dengan entitas eksternal.",
    image: "/images/diagrams/Diagram-context-level-0.png",
    year: "Academic Project",
  },
  {
    title: "Use Case Diagram",
    category: "UML",
    project: "Library Management System",
    description: "Menggambarkan aktor dan interaksi dengan fungsi-fungsi yang tersedia pada sistem perpustakaan.",
    image: "/images/diagrams/diagram-usecase-perpus.png",
    year: "Academic Project",
  },
  {
    title: "Class Diagram",
    category: "UML",
    project: "Library Management System",
    description: "Menggambarkan struktur kelas, atribut, serta hubungan antarobjek dalam sistem perpustakaan.",
    image: "/images/diagrams/Diagram-Class.png",
    year: "Academic Project",
  },
  {
    title: "Database Structure",
    category: "Database Design",
    project: "Library Management System",
    description: "Dokumentasi struktur database yang digunakan untuk mendukung pengelolaan data perpustakaan.",
    image: "/images/diagrams/struktur-database-perpus.png",
    year: "Academic Project",
  },
  {
    title: "Activity Diagram - Login",
    category: "UML",
    project: "Library Management System",
    description: "Alur aktivitas pengguna ketika melakukan login ke sistem perpustakaan.",
    image: "/images/diagrams/diagram-activity-login.png",
    year: "Academic Project",
  },
  {
    title: "Activity Diagram - Book Search",
    category: "UML",
    project: "Library Management System",
    description: "Alur aktivitas dalam proses pencarian buku pada sistem perpustakaan.",
    image: "/images/diagrams/diagram-activity-pencarianbuku.png",
    year: "Academic Project",
  },
  {
    title: "Activity Diagram - Book Borrowing",
    category: "UML",
    project: "Library Management System",
    description: "Alur aktivitas proses peminjaman buku oleh pengguna perpustakaan.",
    image: "/images/diagrams/diagram-activity-pinjambuku.png",
    year: "Academic Project",
  },
  {
    title: "Activity Diagram - Book Return",
    category: "UML",
    project: "Library Management System",
    description: "Alur aktivitas proses pengembalian buku ke perpustakaan.",
    image: "/images/diagrams/diagram-activity-pengembalianbuku.png",
    year: "Academic Project",
  },
  {
    title: "Activity Diagram - Add Book",
    category: "UML",
    project: "Library Management System",
    description: "Alur aktivitas penambahan data buku ke dalam sistem perpustakaan.",
    image: "/images/diagrams/diagram-activity-penambahandatabuku.png",
    year: "Academic Project",
  },
  {
    title: "Activity Diagram - Borrower Data Input",
    category: "UML",
    project: "Library Management System",
    description: "Alur aktivitas input data peminjam untuk mendukung proses peminjaman buku.",
    image: "/images/diagrams/diagram-activity-input-data-pinjam.png",
    year: "Academic Project",
  },
  {
    title: "Sequence Diagram - Login",
    category: "UML",
    project: "Library Management System",
    description: "Urutan interaksi antara pengguna dan sistem dalam proses autentikasi login.",
    image: "/images/diagrams/diagram-squance-login.png",
    year: "Academic Project",
  },
  {
    title: "Sequence Diagram - Book Search",
    category: "UML",
    project: "Library Management System",
    description: "Urutan komunikasi antar komponen dalam proses pencarian buku.",
    image: "/images/diagrams/diagram-squance-pencari-buku.png",
    year: "Academic Project",
  },
  {
    title: "Sequence Diagram - Book Borrowing",
    category: "UML",
    project: "Library Management System",
    description: "Urutan interaksi antar komponen sistem dalam proses peminjaman buku.",
    image: "/images/diagrams/diagram-squance-peminjaman-buku.png",
    year: "Academic Project",
  },
  {
    title: "Sequence Diagram - Book Return",
    category: "UML",
    project: "Library Management System",
    description: "Urutan interaksi antar komponen sistem dalam proses pengembalian buku.",
    image: "/images/diagrams/diagram-squance-pengembalian-buku.png",
    year: "Academic Project",
  },
];

export default diagrams;
