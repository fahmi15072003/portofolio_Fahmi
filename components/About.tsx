"use client";

import { useCallback, useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
} from "react-icons/fi";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type InfoItem = {
  icon: IconType;
  title: string;
  org: string;
  tag?: string;
  description: string;
  bullets?: string[];
  chips?: string[];
};

const tabs = [
  { id: "education", label: "Pendidikan", icon: FiBookOpen },
  { id: "interest", label: "Minat", icon: FiCpu },
] as const;

type TabId = (typeof tabs)[number]["id"];

const techStack = [
  "Python",
  "Laravel",
  "PHP",
  "JavaScript",
  "MySQL",
  "Pandas",
  "Streamlit",
  "Git",
];

const education: InfoItem[] = [
  {
    icon: FiBookOpen,
    title: "S1 Teknik Informatika",
    org: "Universitas Buana Perjuangan Karawang",
    tag: "IPK 3,38 / 4,00",
    description:
      "Menyelesaikan pendidikan sarjana Teknik Informatika dengan ketertarikan pada data, perangkat lunak, dan pengembangan sistem.",
    bullets: [
      "Menyelesaikan tugas akhir di bidang Data Mining dan Machine Learning dengan menerapkan algoritma Isolation Forest untuk mendeteksi potensi kejanggalan pada transaksi BBM bersubsidi.",
      "Mengikuti Program Kreativitas Mahasiswa (PKM) dengan proyek pengembangan aplikasi layanan konsultasi kesehatan mental berbasis chatbot, bekerja sama dengan BELMAWA KEMDIKTISAINTEK RI.",
      "Menjadi panitia kuliah umum bertema pengembangan perangkat lunak yang kolaboratif, adaptif, dan siap industri.",
      "Memperoleh pendaftaran Hak Kekayaan Intelektual (HKI) atas karya tulis berjudul “Sosialisasi Deteksi Kalimat Cyberbullying pada Siswa SMP Yaspiin Pasirmulya.”",
    ],
  },
  {
    icon: FiCode,
    title: "Mata Kuliah Relevan",
    org: "Universitas Buana Perjuangan Karawang",
    description: "Mata kuliah inti yang dipelajari selama masa studi.",
    chips: [
      "Data Mining",
      "Machine Learning",
      "Basis Data",
      "Pemrograman Web",
      "Rekayasa Perangkat Lunak",
      "Analisis dan Perancangan Sistem",
      "Algoritma dan Struktur Data",
      "Jaringan Komputer",
      "Pemrograman Berorientasi Objek",
    ],
  },
];

type Interest = {
  icon: IconType;
  title: string;
  description: string;
};

const interests: Interest[] = [
  {
    icon: FiCpu,
    title: "Information Technology",
    description:
      "Teknologi informasi dan penerapan teknologi untuk mendukung kebutuhan bisnis.",
  },
  {
    icon: FiDatabase,
    title: "Data Management",
    description:
      "Pengelolaan, pengolahan, dan penyajian data secara terstruktur.",
  },
  {
    icon: FiGlobe,
    title: "Web Development",
    description: "Pengembangan aplikasi dan sistem berbasis web.",
  },
  {
    icon: FiLayers,
    title: "System Development",
    description:
      "Analisis kebutuhan, perancangan, dan pengembangan sistem untuk menyelesaikan permasalahan.",
  },
  {
    icon: FiBriefcase,
    title: "Business Operations",
    description:
      "Proses operasional, administrasi, dan peningkatan efisiensi kerja.",
  },
  {
    icon: FiBarChart2,
    title: "Data Analysis",
    description:
      "Analisis data untuk memperoleh informasi dan mendukung pengambilan keputusan.",
  },
];

/* ------------------------------------------------------------------ */
/*  FOTO DOKUMENTASI                                                   */
/*  Letakkan file di /public/images/about/ lalu ubah src, alt, caption */
/* ------------------------------------------------------------------ */

type Photo = { src: string; alt: string; caption: string };

const photos: Photo[] = [
  { src: "/images/about/foto-01.jpg", alt: "Dokumentasi wisuda 1", caption: "Wisuda" },
  { src: "/images/about/foto-02.JPG", alt: "Dokumentasi wisuda 2", caption: "Wisuda" },
  { src: "/images/about/foto-03.jpg", alt: "Dokumentasi wisuda 3", caption: "Wisuda" },
  { src: "/images/about/foto-04.jpeg", alt: "Sosialisasi di SMP Yaspiin 1", caption: "Sosialisasi di SMP Yaspiin" },
  { src: "/images/about/foto-05.jpeg", alt: "Sosialisasi di SMP Yaspiin 2", caption: "Sosialisasi di SMP Yaspiin" },
  { src: "/images/about/foto-061.jpeg", alt: "Dokumentasi pelatihan BLK Karawang 1", caption: "Dokumentasi pelatihan BLK Karawang" },
  { src: "/images/about/foto-07.jpeg", alt: "Dokumentasi pelatihan BLK Karawang 2", caption: "Dokumentasi pelatihan BLK Karawang" },
  { src: "/images/about/foto-08.jpeg", alt: "Dokumentasi 8", caption: "Dokumentasi 8" },
  { src: "/images/about/foto-09.jpg", alt: "Dokumentasi 9", caption: "Dokumentasi 9" },
  { src: "/images/about/foto-10.jpg", alt: "Dokumentasi 10", caption: "Dokumentasi 10" },
];

/* ------------------------------------------------------------------ */
/*  ANIMASI                                                            */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------------------------------------------------------ */
/*  KOMPONEN KECIL                                                     */
/* ------------------------------------------------------------------ */

function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-purple-400/40 hover:text-white">
      {children}
    </li>
  );
}

function InfoCard({
  icon: Icon,
  title,
  org,
  tag,
  description,
  bullets,
  chips,
}: InfoItem) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-5 transition-colors duration-300 hover:border-purple-400/30">
      <div className="flex gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
          <Icon className="text-lg" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h4 className="text-base font-semibold text-white">{title}</h4>
            {tag && (
              <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-purple-300">
                {tag}
              </span>
            )}
          </div>

          <p className="mt-1 text-sm font-medium text-purple-300/90">{org}</p>

          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            {description}
          </p>

          {chips && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </ul>
          )}
        </div>
      </div>

      {bullets && bullets.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-purple-300 transition-colors duration-300 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          >
            {open ? "Sembunyikan detail" : "Lihat detail"}
            <FiChevronDown
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={detailsId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2.5 border-t border-white/5 pt-4">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

function TabPanel({ tab }: { tab: TabId }) {
  if (tab === "education") {
    return (
      <div className="space-y-4">
        {education.map((item) => (
          <InfoCard key={item.title} {...item} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {interests.map(({ icon: Icon, title, description }) => (
          <li key={title} className="group border-t border-white/10 pt-5">
            <div className="flex items-center gap-3">
              <Icon className="text-lg text-purple-300 transition-colors duration-300 group-hover:text-fuchsia-300" />
              <h5 className="text-sm font-semibold text-white">{title}</h5>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {description}
            </p>
          </li>
        ))}
      </ul>

      <div className="border-l-2 border-purple-500/40 pl-5">
        <h4 className="text-sm font-semibold text-white">Cara Kerja</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
          Disiplin, bertanggung jawab, teliti, dan adaptif. Mengutamakan kerja
          sama tim, komunikasi, pemecahan masalah, dan pengembangan diri yang
          berkelanjutan.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CAROUSEL FOTO 3D (kartu menumpuk ke belakang)                      */
/* ------------------------------------------------------------------ */

const VISIBLE_DEPTH = 4; // jumlah kartu yang terlihat menumpuk di belakang
const AUTOPLAY_MS = 4000;

function PhotoStack() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const reduceMotion = useReducedMotion();
  const total = photos.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, next]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Foto dokumentasi"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
    >
      {/* Panggung 3D */}
      <motion.div
        onPanEnd={(_, info) => {
          if (info.offset.x < -50) next();
          else if (info.offset.x > 50) prev();
        }}
        className="relative mx-auto aspect-square w-[78%] touch-pan-y select-none sm:w-[72%] lg:w-[80%]"
        style={{ perspective: 1200 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(147,51,234,0.22),transparent_65%)]"
        />

        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {photos.map((photo, i) => {
            // 0 = paling depan, makin besar = makin ke belakang
            const depth = (i - current + total) % total;
            const isFront = depth === 0;
            const isBehind = depth > 0 && depth <= VISIBLE_DEPTH;
            // kartu yang baru saja lewat: terbang ke kiri lalu masuk ke belakang tumpukan
            const isLeaving = depth === total - 1;

            let animate: TargetAndTransition;
            if (isFront) {
              animate = { x: "0%", y: 0, z: 0, rotateY: 0, scale: 1, opacity: 1 };
            } else if (isBehind) {
              animate = {
                x: `${depth * 9}%`,
                y: 0,
                z: -depth * 90,
                rotateY: -10,
                scale: 1,
                opacity: 1 - depth * 0.2,
              };
            } else if (isLeaving) {
              animate = {
                x: "-55%",
                y: 0,
                z: -140,
                rotateY: 28,
                scale: 0.95,
                opacity: 0,
              };
            } else {
              animate = {
                x: `${(VISIBLE_DEPTH + 1) * 9}%`,
                y: 0,
                z: -(VISIBLE_DEPTH + 1) * 90,
                rotateY: -10,
                scale: 1,
                opacity: 0,
              };
            }

            // rasio asli foto (lebar / tinggi); sementara 4:5 sebelum foto selesai dimuat
            const ratio = ratios[photo.src] ?? 0.8;
            const isWide = ratio >= 1;

            return (
              <motion.div
                key={photo.src}
                initial={false}
                animate={animate}
                transition={{ type: "spring", stiffness: 140, damping: 22 }}
                style={{
                  zIndex: total - depth,
                  transformOrigin: "left center",
                }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <button
                  type="button"
                  tabIndex={isFront ? 0 : -1}
                  aria-label={isFront ? photo.alt : `Tampilkan ${photo.alt}`}
                  onClick={() => !isFront && isBehind && setCurrent(i)}
                  style={{
                    aspectRatio: ratio,
                    width: isWide ? "100%" : "auto",
                    height: isWide ? "auto" : "100%",
                    pointerEvents: isFront || isBehind ? "auto" : "none",
                  }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-[0_30px_70px_-20px_rgba(88,28,135,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 70vw, 380px"
                    priority={i === 0}
                    draggable={false}
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      if (!img.naturalWidth || !img.naturalHeight) return;
                      const r = img.naturalWidth / img.naturalHeight;
                      setRatios((prev) =>
                        prev[photo.src] === r ? prev : { ...prev, [photo.src]: r },
                      );
                    }}
                    className="object-cover"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Keterangan + kontrol */}
      <div className="mx-auto mt-8 w-[78%] sm:w-[72%] lg:w-[80%]">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="mb-2 block h-1 w-10 rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                aria-live="polite"
                className="text-sm font-semibold leading-snug text-white"
              >
                {photos[current].caption}
              </motion.p>
            </AnimatePresence>
            <p className="mt-0.5 text-xs text-gray-500">
              {current + 1} dari {total}
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Foto sebelumnya"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-300 hover:border-purple-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto berikutnya"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-300 hover:border-purple-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div
          className="mt-4 flex flex-wrap gap-1.5"
          role="group"
          aria-label="Pilih foto"
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-current={i === current}
              aria-label={`Foto ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 ${
                i === current
                  ? "w-6 bg-purple-400"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION UTAMA                                                      */
/* ------------------------------------------------------------------ */

export default function About() {
  const [active, setActive] = useState<TabId>("education");

  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="relative overflow-hidden py-24 md:py-32">
        {/* Latar belakang glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -right-40 top-1/4 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.12),transparent_70%)]" />
          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(192,38,211,0.09),transparent_70%)]" />
        </div>

        <Container>
          <SectionTitle
            badge="About Me"
            title="Exploring Technology, Building Meaningful Solutions"
            subtitle="Get to know my background, skills, and the way I approach technology."
          />

          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
            {/* ===== Kolom kiri: konten ===== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="space-y-8 lg:col-span-7"
            >
              {/* Status */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Terbuka untuk peluang kerja · Karawang
              </motion.div>

              {/* Perkenalan */}
              <div className="space-y-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg font-light leading-relaxed text-gray-300 md:text-xl"
                >
                  I am an{" "}
                  <strong className="font-medium text-white">
                    Informatics Engineering
                  </strong>{" "}
                  graduate from Universitas Buana Perjuangan Karawang with a
                  GPA of 3.38/4.00. My interests span information technology,
                  data management, web development, and business operations.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg font-light leading-relaxed text-gray-300 md:text-xl"
                >
                  I have experience in managing data and administrative
                  processes, handling transactions and inventory, as well as
                  developing web-based applications. I enjoy exploring how
                  technology can simplify workflows, improve efficiency, and
                  turn ideas into practical solutions.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg font-light leading-relaxed text-gray-300 md:text-xl"
                >
                  I am always eager to learn, explore new technologies, and
                  expand my skills through hands-on projects and real-world
                  experience. I believe that continuous learning, attention to
                  detail, and adaptability are essential for growing both
                  professionally and personally.
                </motion.p>
              </div>

              {/* Teknologi */}
              <motion.div variants={itemVariants}>
                <p className="mb-3 text-sm font-medium text-gray-400">
                  Teknologi yang saya gunakan
                </p>
                <ul className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </ul>
              </motion.div>

              {/* Ajakan bertindak */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="/cv.pdf"
                  download
                  className="rounded-full bg-linear-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  Unduh CV
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-colors hover:border-purple-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                >
                  Hubungi Saya
                </a>
              </motion.div>

              {/* Tab */}
              <motion.div variants={itemVariants}>
                <div
                  role="tablist"
                  aria-label="Tentang saya"
                  className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/3 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {tabs.map(({ id, label, icon: Icon }) => {
                    const isActive = active === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        role="tab"
                        id={`about-tab-${id}`}
                        aria-selected={isActive}
                        aria-controls="about-panel"
                        onClick={() => setActive(id)}
                        className={`relative flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="about-tab-pill"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 32,
                            }}
                            className="absolute inset-0 rounded-full bg-linear-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-600/25"
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                          <Icon />
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div
                  id="about-panel"
                  role="tabpanel"
                  aria-labelledby={`about-tab-${active}`}
                  className="mt-5"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <TabPanel tab={active} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>

            {/* ===== Kolom kanan: carousel foto 3D ===== */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-first lg:order-last lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
            >
              <PhotoStack />
            </motion.div>
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}