
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import { projects } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-1/3 left-1/4 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        
        <SectionTitle
          badge="PORTFOLIO"
          title="Featured Projects"
          subtitle="A collection of projects showcasing my experience in software development, system design, and digital solutions."
          align="center"
        />

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Card className="flex flex-col h-full border border-white/5 bg-slate-950/40 relative overflow-hidden group p-0">

                {/* Project Thumbnail */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">

                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900/40 to-slate-900">
                      <span className="text-sm text-gray-500">
                        Project Preview
                      </span>
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-5 md:p-6">

                  {/* Role and Date */}
                  <div className="flex items-center justify-between text-xs text-purple-300 font-semibold mb-3 gap-2">
                    <span className="truncate">{project.role}</span>
                    <span className="text-gray-500 font-light shrink-0">
                      {project.date}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Tag
                        key={tech}
                        variant="slate"
                        className="text-xs py-0.5 px-2"
                      >
                        {tech}
                      </Tag>
                    ))}

                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-gray-500 self-center font-medium">
                        +{project.technologies.length - 4} lainnya
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">

                    {/* Case Study */}
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="secondary"
                      className="flex-1 text-xs md:text-sm py-2"
                    >
                      <span>View Case Study</span>
                    </Button>

                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 shrink-0"
                        aria-label="View GitHub Repository"
                      >
                        <FiGithub />
                      </a>
                    )}

                    {/* Demo Website */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 shrink-0"
                        aria-label="View Project Website"
                      >
                        <FiExternalLink />
                      </a>
                    )}

                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
