
"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMicrosoft,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaLinux,
} from "react-icons/fa";

import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStreamlit,
  SiGithub,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400 text-lg" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-lg" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-400 text-lg" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-lg" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 text-lg" /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "Laravel", icon: <SiLaravel className="text-red-400 text-lg" /> },
        { name: "React", icon: <SiReact className="text-cyan-400 text-lg" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-lg" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-lg" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-red-400 text-lg" /> },
      ],
    },
    {
      title: "Database & Data Processing",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400 text-lg" /> },
        { name: "Data Management", icon: <FaDatabase className="text-purple-400 text-lg" /> },
        { name: "Data Analysis", icon: <FaDatabase className="text-cyan-400 text-lg" /> },
        { name: "Microsoft Excel", icon: <FaMicrosoft className="text-green-400 text-lg" /> },
      ],
    },
    {
      title: "Tools & Productivity",
      skills: [
        { name: "VS Code", icon: <FaCode className="text-blue-400 text-lg" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-400 text-lg" /> },
        { name: "GitHub", icon: <SiGithub className="text-white text-lg" /> },
        { name: "Microsoft Word", icon: <FaMicrosoft className="text-blue-400 text-lg" /> },
        { name: "PowerPoint", icon: <FaMicrosoft className="text-orange-400 text-lg" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-400 text-lg" /> },
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
    },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-2/3 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Skills"
          title="Technical Skills"
          subtitle="Technologies, programming languages, and tools I have explored and used in software development, data processing, and system implementation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
            >
              <Card className="h-full border border-white/5 bg-slate-950/40 relative group overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/5 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300 group/item cursor-default"
                    >
                      <div className="shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                        {skill.icon}
                      </div>

                      <span className="text-xs md:text-sm text-gray-400 font-light group-hover/item:text-white transition-colors duration-300 select-none">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
