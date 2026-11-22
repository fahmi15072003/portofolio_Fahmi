
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { FiCalendar, FiBriefcase, FiMapPin } from "react-icons/fi";

interface ExperienceItem {
  role: string;
  company: string;
  logo: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Production Operator",
    company: "PT. SIIX EMS Indonesia",
    logo: "/images/Siix.png",
    type: "Kontrak",
    period: "Maret 2026 – September 2026",
    location: "Kawasan Industri KIIC, Karawang",
    description:
      "Bekerja di bidang manufaktur elektronik (Electronics Manufacturing Services) dengan fokus pada proses produksi, pengoperasian mesin SMT, dan pemeriksaan kualitas produk.",
    achievements: [
      "Mengoperasikan dan memantau mesin produksi pada proses Surface Mount Technology (SMT) sesuai SOP.",
      "Memastikan proses produksi berjalan dengan baik untuk memenuhi target dan standar kualitas.",
      "Melakukan pemeriksaan produk serta pengecekan awal terhadap kendala dalam proses produksi.",
      "Mencatat hasil produksi dan melaporkan kendala operasional kepada atasan atau tim terkait.",
      "Menjaga kebersihan area kerja serta menerapkan prinsip 5S dan keselamatan kerja."
    ]
  },
  {
    role: "Cooperative Staff",
    company: "PT. Astra Juoku Indonesia",
    logo: "/images/Aji2.png",
    type: "Kontrak",
    period: "Oktober 2023 – September 2025",
    location: "Kawasan Industri Mitra Karawang",
    description:
      "Bertanggung jawab mendukung kegiatan administrasi dan operasional koperasi, khususnya pelayanan anggota, pencatatan transaksi, pengelolaan data, serta persediaan barang.",
    achievements: [
      "Memberikan pelayanan administrasi dan transaksi kepada anggota koperasi.",
      "Melakukan penginputan, pemeriksaan, verifikasi, dan rekonsiliasi data transaksi.",
      "Mengelola pencatatan persediaan serta laporan operasional harian sampai bulanan.",
      "Menyusun dan mengarsipkan dokumen administrasi serta laporan transaksi.",
      "Mengembangkan sistem kasir berbasis web untuk menggantikan pencatatan transaksi manual menggunakan buku."
    ]
  },
  {
    role: "Cooperative Operations",
    company: "Koperasi Sinergi Bersama AJI",
    logo: "/images/koperasi.png",
    type: "Academic internship",
    period: "September 2024 – Januari 2025",
    location: "Kawasan Industri Mitra Karawang",
    description:
      "Melaksanakan kegiatan magang akademik dengan mendukung pelayanan anggota, pencatatan transaksi penjualan, pemeriksaan stok, dan pengelolaan data produk. Mengidentifikasi kendala pencatatan inventaris manual dan mengembangkan solusi berbasis web.",
    achievements: [
      "Mendukung pelayanan anggota, pencatatan transaksi penjualan, dan pemeriksaan persediaan.",
      "Menganalisis kebutuhan serta kendala dalam proses pengelolaan inventaris secara manual.",
      "Merancang dan mengembangkan sistem inventaris berbasis web menggunakan PHP, Laravel, dan MySQL.",
      "Mengembangkan fitur pengelolaan produk dan kategori, barang masuk, kasir, dashboard, riwayat transaksi, serta laporan."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[130px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Career"
          title="My Professional Experience"
          subtitle="Professional journey and internship experience in Information Technology, administration, and operations."
        />

        {/* Timeline Pengalaman */}
        <div className="relative border-l border-purple-500/20 ml-4 md:ml-6 space-y-12">

          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Point */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
              </span>

              <Card className="border-purple-500/10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">

                  <div className="flex items-start gap-4">

                    {/* Company Logo */}
                    <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-white flex items-center justify-center p-2 border border-gray-200">
                      <Image
                        src={exp.logo}
                        alt={`Logo ${exp.company}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Job Information */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        <FiBriefcase className="text-purple-400 shrink-0 text-base md:text-lg" />
                        {exp.role}
                      </h3>

                      <p className="text-sm md:text-base font-semibold text-purple-300 mt-2">
                        {exp.company}
                      </p>

                      <span className="inline-block mt-2 text-xs text-gray-400 border border-purple-500/20 bg-purple-500/5 rounded-full px-3 py-1">
                        {exp.type}
                      </span>
                    </div>

                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-col gap-2 text-xs text-gray-400 shrink-0 md:pt-1">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-purple-400" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                </div>

                {/* Description */}
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Responsibilities & Contributions
                  </h4>

                  <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                    {exp.achievements.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </Card>
            </motion.div>
          ))}

        </div>
      </Container>
    </section>
  );
}
