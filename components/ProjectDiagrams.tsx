
"use client";

import { useState } from "react";
import diagrams from "@/data/diagrams";
import Card from "@/components/ui/Card";
import { FiLayers, FiZoomIn } from "react-icons/fi";

interface ProjectDiagramsProps {
  projectName: string;
}

export default function ProjectDiagrams({
  projectName,
}: ProjectDiagramsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectDiagrams = diagrams.filter(
    (diagram) => diagram.project === projectName
  );

  if (projectDiagrams.length === 0) return null;

  return (
    <section className="mt-16 space-y-8">
      {/* Section Header */}
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <FiLayers className="text-blue-400" />
          Diagrams & Documentation
        </h2>

        <p className="text-gray-400 leading-relaxed">
          A collection of system diagrams and technical documentation
          developed as part of academic coursework, covering system
          analysis, process modeling, database design, and software
          system planning.
        </p>
      </div>

      {/* Diagram Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectDiagrams.map((diagram, index) => (
          <Card key={index} hoverEffect={false} className="!p-0 overflow-hidden">
            <button
              type="button"
              onClick={() => setSelectedImage(diagram.image)}
              className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden group cursor-zoom-in"
            >
              <img
                src={diagram.image}
                alt={diagram.title}
                className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>

            <div className="p-5">
              <p className="text-xs text-blue-400 uppercase tracking-wider mb-2">
                {diagram.category}
              </p>

              <h3 className="font-semibold text-white mb-2">
                {diagram.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {diagram.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-6 text-white text-4xl hover:text-gray-300"
            aria-label="Close image preview"
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
    </section>
  );
}
