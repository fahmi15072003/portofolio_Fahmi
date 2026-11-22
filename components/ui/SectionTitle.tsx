
"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  className = "",
  align = "left",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-4 mb-16 ${
        isCenter
          ? "items-center text-center mx-auto max-w-3xl"
          : "items-start text-left"
      } ${className}`}
    >
      {/* Badge */}
      {badge && (
        <span className="px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-medium text-purple-300 tracking-[0.18em] uppercase">
          {badge}
        </span>
      )}

      {/* Title */}
     <h2 className="bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text pb-2 text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl xl:text-6xl">
  {title}
</h2>

      {/* Accent Line */}
      <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg text-gray-400 font-light leading-relaxed ${
            isCenter ? "text-center mx-auto" : "text-left"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
