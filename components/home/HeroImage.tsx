"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
} from "react-icons/fa";
import { FiCode, FiDatabase, FiMapPin } from "react-icons/fi";
import {
  SiNextdotjs,
  SiPython,
  SiPhp,
  SiMysql,
  SiLaravel,
} from "react-icons/si";
import Tag from "../ui/Tag";

const MAX_TILT = 6; // derajat kemiringan maksimum

type Tech = {
  name: string;
  icon: IconType;
  variant: "blue" | "yellow" | "purple" | "cyan" | "slate";
  iconColor?: string; // warna khusus untuk ikon
};

const techs: Tech[] = [
  { name: "HTML", icon: FaHtml5, variant: "blue" },
  { name: "CSS", icon: FaCss3Alt, variant: "blue" },
  { name: "JavaScript", icon: FaJs, variant: "yellow" },
  { name: "PHP", icon: SiPhp, variant: "purple" },
  { name: "Laravel", icon: SiLaravel, variant: "cyan" },
  { name: "MySQL", icon: SiMysql, variant: "blue" },
  { name: "Python", icon: SiPython, variant: "slate" },
  { name: "Next.js", icon: SiNextdotjs, variant: "cyan" },
  { name: "React", icon: FaReact, variant: "blue" },
  { name: "Excel", icon: FaFileExcel, variant: "slate", iconColor: "text-emerald-400" },
  { name: "PowerPoint", icon: FaFilePowerpoint, variant: "slate", iconColor: "text-orange-400" },
  { name: "Word", icon: FaFileWord, variant: "slate", iconColor: "text-blue-400" },
];

const tagContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function FloatingBadge({
  icon: Icon,
  label,
  className,
  delay,
}: {
  icon: IconType;
  label: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`animate-float motion-reduce:animate-none absolute z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-900/90 py-2 pl-2 pr-4 shadow-xl shadow-black/40 md:flex ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
        <Icon />
      </span>
      <span className="text-xs font-semibold text-gray-100">{label}</span>
    </div>
  );
}

export default function HeroImage() {
  const reduceMotion = useReducedMotion();

  // Posisi mouse: motion value, tidak memicu render ulang
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Kemiringan 3D dengan pegas agar gerakannya halus
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 150, damping: 20 });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.16), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    if (reduceMotion) return;
    rotateYRaw.set((x / rect.width - 0.5) * 2 * MAX_TILT);
    rotateXRaw.set(-(y / rect.height - 0.5) * 2 * MAX_TILT);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 16 }}
      className="relative"
    >
      {/* Cahaya latar (gradient biasa, tanpa blur) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(147,51,234,0.22),transparent_65%)]"
      />

      {/* Cincin orbit berputar pelan dengan satu titik cahaya */}
      <div
        aria-hidden="true"
        className="animate-orbit-slow pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden aspect-square w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/20 will-change-transform motion-reduce:animate-none md:block"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
      </div>

      {/* Badge melayang di luar kartu */}
      <FloatingBadge
        icon={FiCode}
        label="Web Developer"
        delay="-2s"
        className="-left-10 top-24"
      />
      <FloatingBadge
        icon={FiDatabase}
        label="Data Management"
        delay="-4s"
        className="-right-6 bottom-52"
      />

      {/* Kartu melayang lewat CSS (GPU) */}
      <div className="animate-float motion-reduce:animate-none">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="group relative w-[310px] select-none will-change-transform md:w-[360px]"
        >
          {/* Border dengan cahaya yang berputar mengelilingi kartu */}
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white/10 p-px shadow-[0_30px_80px_-20px_rgba(88,28,135,0.5)]">
            <span
              aria-hidden="true"
              className="animate-orbit absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_220deg,rgba(192,132,252,0.95)_320deg,transparent_360deg)] will-change-transform motion-reduce:animate-none"
            />

            {/* Isi kartu */}
            <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-[#080d1c] p-3.5">
              {/* Tekstur titik halus */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Spotlight yang mengikuti kursor */}
              <motion.div
                aria-hidden="true"
                style={{ background: spotlight }}
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Foto */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-slate-950">
                <Image
                  src="/images/fahmi5.jpg"
                  alt="Muhamad Fahmi Jalaluddin Ihsan"
                  fill
                  priority
                  sizes="(max-width: 768px) 310px, 360px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Kilau yang melintas saat di-hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[500%] motion-reduce:hidden"
                />

                {/* Sudut bingkai ala viewfinder */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-purple-300/60"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-purple-300/60"
                />

                {/* Badge jurusan */}
                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Informatics Engineering
                </div>

                {/* Badge lokasi */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white">
                  <FiMapPin className="text-purple-400" />
                  Karawang, Indonesia
                </div>
              </div>

              {/* Teknologi */}
              <div className="relative mt-5 px-0.5 pb-0.5">
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Technologies &amp; Tools
                  </h3>
                  <span className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
                </div>

                <motion.div
                  variants={tagContainer}
                  initial={reduceMotion ? false : "hidden"}
                  animate="visible"
                  className="flex flex-wrap gap-2"
                >
                  {techs.map(({ name, icon: Icon, variant, iconColor }) => (
                    <motion.div key={name} variants={tagItem}>
                      <Tag variant={variant}>
                        <Icon className={`text-sm ${iconColor ?? ""}`} />
                        <span>{name}</span>
                      </Tag>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}