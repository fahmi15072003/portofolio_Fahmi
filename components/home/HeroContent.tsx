"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import HeroButtons from "./HeroButtons";

const focusAreas = ["Data Analysis", "Data Management", "Web Development","Business Operations"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

const barVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HeroContent() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      className="flex flex-col items-start text-left"
    >
      {/* Status */}
      <motion.div
        variants={itemVariants}
        className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-emerald-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open to Work Opportunities
      </motion.div>

      {/* Judul */}
      <motion.h1
        variants={itemVariants}
        className="bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text pb-2 text-6xl font-bold leading-none tracking-tight text-transparent md:text-7xl xl:text-8xl"
      >
        Portofolio
      </motion.h1>

      {/* Garis aksen */}
      <motion.span
        variants={barVariants}
        aria-hidden="true"
        className="mt-5 block h-1 w-20 origin-left rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500"
      />

      {/* Nama + peran */}
      <motion.div variants={itemVariants} className="mt-8">
        <p className="text-lg font-medium tracking-wide text-gray-100 md:text-xl">
          Muhamad Fahmi Jalaluddin Ihsan
        </p>
        <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
          Informatics Engineering Graduate
        </h2>
      </motion.div>

      {/* Bidang fokus */}
      <motion.ul
        variants={itemVariants}
        className="mt-5 flex flex-wrap gap-2"
        aria-label="Focus areas"
      >
        {focusAreas.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-purple-400/40 hover:text-white"
          >
            {item}
          </li>
        ))}
      </motion.ul>

      {/* Deskripsi */}
      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-xl text-base font-light leading-relaxed text-gray-400 md:text-lg"
      >
        Informatics Engineering graduate with experience in administration,
        data management, and web-based application development. Interested in
        information technology, data processing, and digital solutions to
        improve business operations and work efficiency.
      </motion.p>

      {/* Tombol */}
      <motion.div variants={itemVariants}>
        <HeroButtons />
      </motion.div>
    </motion.div>
  );
}