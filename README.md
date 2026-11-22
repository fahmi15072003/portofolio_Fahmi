# Muhamad Fahmi — Digital Portfolio

> Website portofolio pribadi Muhamad Fahmi Jalaluddin Ihsan, S.Kom. — lulusan Teknik Informatika dengan fokus pada Data Management dan Web Development. Dibangun dengan Next.js, TypeScript, Tailwind CSS, dan Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat-square&logo=framer&logoColor=white)

---

## Isi Portofolio

- **Hero** — perkenalan singkat, tombol *View Projects* dan *Download CV*.
- **About** — profil, latar belakang pendidikan, dan ringkasan kemampuan.
- **Experience** — pengalaman kerja, magang, pelatihan, dan organisasi.
- **Skills** — teknologi dan tools yang dikuasai, dikelompokkan per kategori.
- **Projects** — studi kasus project (masalah, solusi, arsitektur, dan hasil), dengan halaman detail per project.
- **Contact** — tautan GitHub, LinkedIn, email, dan media sosial.

Project yang ditampilkan antara lain Inventory Management System, Web Cashier System, Hosting & Server Management, Fuel Transaction Anomaly Detection (Isolation Forest), dan Egg Detection menggunakan YOLOv8.

---

## Fitur

- **App Router** — dibangun sepenuhnya dengan Next.js App Router.
- **Tampilan glassmorphism** — kartu transparan dengan efek blur dan palet warna gelap.
- **Animasi halus** — transisi dan animasi saat scroll dengan Framer Motion.
- **Halaman detail project** — tiap project punya halaman studi kasus di `/projects/[slug]`.
- **Responsif** — nyaman dibuka di ponsel, tablet, maupun desktop.
- **Form kontak (opsional)** — memakai Server Action dan Resend, bisa diaktifkan kapan saja.

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| **Framework** | Next.js (App Router) |
| **Bahasa** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animasi** | Framer Motion |
| **Ikon** | React Icons |
| **Email (opsional)** | Resend API via Server Actions |

---

## Struktur Project

```
portfolio-fahmi-junniora/
├── app/
│   ├── actions/
│   │   └── sendEmail.ts        # Server Action untuk form kontak (opsional)
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Halaman detail project
│   ├── globals.css             # Style global dan konfigurasi Tailwind
│   ├── layout.tsx              # Layout utama (Navbar, font, metadata)
│   └── page.tsx                # Halaman utama
│
├── components/
│   ├── home/                   # Bagian Hero (konten, tombol, foto profil)
│   ├── ui/                     # Komponen dasar: Button, Card, Tag, SectionTitle
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Container.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectGallery.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
│
├── data/
│   └── projects.ts             # Data project
│
├── type/
│   └── index.ts                # Definisi tipe TypeScript (Project, ProjectImage)
│
└── public/
    ├── images/                 # Foto profil dan screenshot project
    └── cv.pdf                  # CV untuk tombol Download CV
```

---

## Menjalankan di Komputer Lokal

### Prasyarat

- Node.js 18 atau lebih baru
- npm atau pnpm

### Instalasi

```bash
# Clone repository
git clone https://github.com/fahmi15072003/<nama-repo>.git

# Masuk ke folder project
cd <nama-repo>

# Install dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Mengubah Isi Portofolio

### Menambah atau mengubah project

Semua project disimpan di `data/projects.ts`. Contoh format gambar:

```ts
images: [
  {
    src: "/images/projects/nama-project/dashboard.png",
    alt: "Dashboard aplikasi",
    caption: "Halaman dashboard",
  },
],
```

Simpan file gambar di `public/images/projects/<nama-project>/`.

### Mengganti CV

Letakkan file CV di folder `public/` dengan nama `cv.pdf`. Tombol *Download CV* otomatis mengarah ke `/cv.pdf`.

---

## Mengaktifkan Form Kontak (Opsional)

1. Buat akun gratis di [resend.com](https://resend.com) dan buat API key.
2. Buat file `.env.local` di folder utama project:

   ```env
   RESEND_API_KEY=re_api_key_kamu
   ```

3. Di `components/Contact.tsx`, aktifkan blok form yang sedang di-comment.
4. Di `app/actions/sendEmail.ts`, isi kolom `to` dengan alamat emailmu.

> `.env.local` sudah masuk `.gitignore`, jadi tidak akan ikut terunggah ke GitHub.

---

## Deployment

Project ini dideploy di **Vercel**.

1. Push kode ke GitHub.
2. Impor repository di [vercel.com/new](https://vercel.com/new).
3. Vercel otomatis mengenali Next.js. Klik **Deploy**.

Setiap `git push` ke branch `main` akan memicu deploy ulang secara otomatis.

---

## Kontak

- GitHub: [github.com/fahmi15072003](https://github.com/fahmi15072003)
- LinkedIn: *(isi tautan LinkedIn)*
- Email: *(isi alamat email)*

---

## Kredit

Struktur dan desain dasar website ini berasal dari template **Digital Portfolio** karya Ángel Álvarez ([github.com/Junniora/Digital-Portfolio](https://github.com/Junniora/Digital-Portfolio)). Isi konten, data project, dan penyesuaian tampilan dibuat oleh Muhamad Fahmi Jalaluddin Ihsan.
