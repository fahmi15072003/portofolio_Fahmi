"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "/", id: "home" },
  { label: "About me", href: "/#about", id: "about" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Certifications", href: "/#certifications", id: "certifications" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Deteksi section yang sedang terlihat
    const sections = links
      .filter((l) => l.id !== "home")
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    // Home di paling atas + auto-hide saat scroll ke bawah
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 120) setActive("home");
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeLabel = links.find((l) => l.id === active)?.label ?? "Home";

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-transform duration-300 ${
        hidden && !open ? "-translate-y-24" : "translate-y-0"
      }`}
    >
      {/* Desktop */}
      <nav className="hidden rounded-full border border-white/10 bg-slate-950/60 p-1.5 shadow-lg shadow-black/30 ring-1 ring-white/5 backdrop-blur-xl md:block">
        <ul className="flex items-center gap-1 text-sm font-medium">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 transition-all duration-300 ${
                    isActive
                      ? "bg-purple-500/20 text-white shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)]"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex w-64 items-center justify-between rounded-full border border-white/10 bg-slate-950/60 py-1.5 pl-5 pr-1.5 shadow-lg shadow-black/30 ring-1 ring-white/5 backdrop-blur-xl">
          <span className="text-sm font-medium text-white">{activeLabel}</span>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <ul className="mt-2 w-64 space-y-1 rounded-3xl border border-white/10 bg-slate-950/80 p-2 shadow-lg shadow-black/30 backdrop-blur-xl">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === link.id
                      ? "bg-purple-500/20 text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}