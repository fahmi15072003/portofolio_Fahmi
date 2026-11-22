
"use client";

import { useState } from "react";
import diagrams from "@/data/diagrams";
import Container from "@/components/Container";

export default function DiagramsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen py-24">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary mb-4">
            Academic Works
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Diagrams & Documentation
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A collection of system diagrams and technical documentation
            developed as part of academic coursework, covering system
            analysis, process modeling, database design, and software
            system planning.
          </p>
        </div>

        {/* Diagram Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagrams.map((diagram, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border overflow-hidden
              bg-card transition-all duration-300 hover:-translate-y-1
              hover:shadow-xl"
            >
              {/* Image */}
              <button
                onClick={() => setSelectedImage(diagram.image)}
                className="relative w-full aspect-[4/3] overflow-hidden
                bg-muted cursor-zoom-in"
              >
                <img
                  src={diagram.image}
                  alt={diagram.title}
                  className="w-full h-full object-contain p-3
                  transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10
                  transition-colors duration-300"
                />
              </button>

              {/* Information */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {diagram.category}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {diagram.year}
                  </span>
                </div>

                <h2 className="text-lg font-semibold mb-2">
                  {diagram.title}
                </h2>

                <p className="text-sm text-muted-foreground mb-3">
                  {diagram.project}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {diagram.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
          bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-6 text-white text-3xl
            hover:text-gray-300"
            aria-label="Close image"
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt="Diagram preview"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
