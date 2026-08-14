"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiImage, FiMaximize2, FiX } from "react-icons/fi";
import type { ProjectImage } from "@/type";

interface ProjectGalleryProps {
  images?: ProjectImage[];
  projectTitle: string;
}

export default function ProjectGallery({ images = [], projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const activeImage = images[activeIndex];

  const goTo = useCallback((direction: number) => {
    setDirection(direction);
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen || images.length < 2) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") goTo(-1);
      if (event.key === "ArrowRight") goTo(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, isOpen, images.length]);

  useEffect(() => {
    if (images.length < 2 || isOpen || isPaused) return;

    const carouselTimer = window.setInterval(() => goTo(1), 5000);
    return () => window.clearInterval(carouselTimer);
  }, [goTo, images.length, isOpen, isPaused]);

  if (images.length === 0) {
    return (
      <section className="rounded-3xl border border-dashed border-white/15 bg-slate-950/25 p-8 text-center">
        <FiImage className="mx-auto mb-3 text-2xl text-purple-300" />
        <h2 className="text-lg font-bold text-white">Project gallery</h2>
        <p className="mt-2 text-sm text-gray-400">Visuals for {projectTitle} will be added soon.</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="gallery-title">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">Visual walkthrough</p>
          <h2 id="gallery-title" className="text-2xl font-bold text-white">Project gallery</h2>
        </div>
        <span className="text-sm text-gray-400">{images.length} {images.length === 1 ? "image" : "images"}</span>
      </div>

      <div
        className="group relative mx-auto aspect-[16/8.5] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.button
            key={activeImage.src}
            type="button"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 w-full cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400"
            aria-label={`Expand image: ${activeImage.alt}`}
          >
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="(min-width: 1024px) 56rem, 100vw" className="object-cover" priority={activeIndex === 0} />
          </motion.button>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-purple-400/0 shadow-[inset_0_0_0_rgba(192,132,252,0),0_0_0_rgba(168,85,247,0)] transition-all duration-500 ease-out group-hover:border-purple-400/80 group-hover:shadow-[inset_0_0_24px_rgba(192,132,252,0.2),0_0_28px_rgba(168,85,247,0.5)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent px-5 pb-5 pt-16">
          {activeImage.caption && <p className="text-sm text-white">{activeImage.caption}</p>}
        </div>

        <button type="button" onClick={() => setIsOpen(true)} className="absolute right-3 top-3 rounded-full bg-slate-950/75 p-2 text-white opacity-0 transition group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Expand image"><FiMaximize2 /></button>

        {images.length > 1 && <>
          <button type="button" onClick={() => goTo(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/75 p-2.5 text-white opacity-0 transition group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Previous image"><FiChevronLeft /></button>
          <button type="button" onClick={() => goTo(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/75 p-2.5 text-white opacity-0 transition group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Next image"><FiChevronRight /></button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2" aria-label="Gallery navigation">
            {images.map((image, index) => (
              <button key={image.src} type="button" onClick={() => { setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); }} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`} aria-label={`Show image ${index + 1}`} aria-current={index === activeIndex} />
            ))}
          </div>
        </>}
      </div>

      <AnimatePresence>
        {isOpen && activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image viewer`}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeImage.src}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 36 : -36, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -36 : 36, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={activeImage.src} alt={activeImage.alt} width={1600} height={900} className="max-h-[80vh] w-full rounded-2xl object-contain" priority />
              </motion.div>
            </AnimatePresence>
            <button type="button" onClick={() => setIsOpen(false)} className="absolute right-3 top-3 rounded-full bg-slate-950/75 p-2 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Close gallery"><FiX /></button>
            {images.length > 1 && <>
              <button type="button" onClick={() => goTo(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/75 p-3 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Previous image"><FiChevronLeft /></button>
              <button type="button" onClick={() => goTo(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/75 p-3 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Next image"><FiChevronRight /></button>
            </>}
            {activeImage.caption && <p className="mt-3 text-center text-sm text-gray-300">{activeImage.caption}</p>}
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
