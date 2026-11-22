"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Google IT Automation with Python",
    category: "Professional Certificate",
    year: "2025",
    image:
      "/images/certifications/Sertifikasi-GoogleCoursera-Google-IT-Automation-with-Python.jpg",
  },
  {
    title: "Copyright – Cyberbullying Detection",
    category: "Intellectual Property",
    year: "2025",
    image: "/images/certifications/sertifikasi-HAKI.jpg",
  },
  {
    title: "Program Kreativitas Mahasiswa (PKM)",
    category: "Academic Program",
    year: "2025",
    image: "/images/certifications/Sertifikat-PKM.jpg",
  },
  {
    title: "Basketball Team Chairman",
    category: "Leadership & Organization",
    year: "2020–2021",
    image: "/images/certifications/sertifikat-ketua-basketball.jpg",
  },
  {
    title: "Motorcycle Injection System Servicing",
    category: "Competency-Based Training",
    year: "2023",
    image: "/images/certifications/training-blk2.jpg",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              Certifications
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Certifications & Achievements
            </h2>

            <div className="mt-5 h-0.5 w-12 rounded-full bg-purple-500" />

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Certificates, training programs, and activities reflecting my
              learning journey, technical development, and organizational
              experience.
            </p>
          </div>

          <Link
            href="/certifications"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white md:self-auto"
          >
            View All Certificates
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40"
            >
              {/* Card header */}
              <div className="flex min-h-[3.5rem] items-start justify-between gap-4 border-b border-white/10 pb-4">
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {certificate.title}
                </h3>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              </div>

              {/* Image */}
              <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-contain p-1 transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Chips */}
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
                  {certificate.category}
                </span>
                <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
                  {certificate.year}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}