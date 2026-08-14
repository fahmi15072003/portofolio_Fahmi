"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiImage, FiX } from "react-icons/fi";
import type { ProjectImage } from "@/type";

interface ProjectGalleryProps {
  images?: ProjectImage[];
  projectTitle: string;
}

export default function ProjectGallery({ images = [], projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = images[activeIndex];

  const goTo = useCallback((direction: number) => {
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

      <div className="grid gap-3 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => { setActiveIndex(index); setIsOpen(true); }}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label={`Open image ${index + 1}: ${image.alt}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            {image.caption && <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 pb-3 pt-12 text-sm text-white opacity-0 transition group-hover:opacity-100">{image.caption}</span>}
          </button>
        ))}
      </div>

      {isOpen && activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${projectTitle} image viewer`} onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={activeImage.src} alt={activeImage.alt} width={1600} height={900} className="max-h-[80vh] w-full rounded-2xl object-contain" priority />
            <button type="button" onClick={() => setIsOpen(false)} className="absolute right-3 top-3 rounded-full bg-slate-950/75 p-2 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Close gallery"><FiX /></button>
            {images.length > 1 && <>
              <button type="button" onClick={() => goTo(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/75 p-3 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Previous image"><FiChevronLeft /></button>
              <button type="button" onClick={() => goTo(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/75 p-3 text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Next image"><FiChevronRight /></button>
            </>}
            {activeImage.caption && <p className="mt-3 text-center text-sm text-gray-300">{activeImage.caption}</p>}
          </div>
        </div>
      )}
    </section>
  );
}
