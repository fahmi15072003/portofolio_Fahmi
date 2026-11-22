
"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import {
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

interface Activity {
  title: string;
  role: string;
  organizer: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

export default function CampusActivities() {
  const activities: Activity[] = [
    {
      title: "Program Kreativitas Mahasiswa (PKM)",
      role: "Team Member",
      organizer: "BELMAWA KEMDIKTISAINTEK RI",
      year: "2025",
      description:
        "Participated in a student creativity program developing a mental health consultation chatbot application.",
      icon: <FaLightbulb className="text-yellow-400 text-xl" />,
    },
    {
      title: "Serum In Action",
      role: "Event Committee",
      organizer: "University Public Lecture",
      year: "2026",
      description:
        "Contributed to the organizing committee of a university public lecture, supporting event preparation and implementation.",
      icon: <FaUsers className="text-purple-400 text-xl" />,
    },
    {
      title: "Leadership & Organizational Training (LDKK)",
      role: "Participant",
      organizer: "University Student Development Program",
      year: "—",
      description:
        "Participated in leadership and organizational development activities to improve teamwork, communication, and organizational awareness.",
      icon: <FaGraduationCap className="text-cyan-400 text-xl" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="activities"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Activities & Involvement"
          title="Activities & Involvement"
          subtitle="Activities, collaborative experiences, and student involvement throughout my academic journey."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full border border-white/5 bg-slate-950/40 relative group overflow-hidden">
                {/* Card header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    {activity.icon}
                  </div>

                  <span className="text-xs text-gray-500 border border-white/10 rounded-full px-3 py-1">
                    {activity.year}
                  </span>
                </div>

                {/* Activity information */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-purple-400 font-medium mb-1">
                    {activity.role}
                  </p>

                  <p className="text-xs text-gray-500">
                    {activity.organizer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {activity.description}
                </p>

                {/* Bottom decoration */}
                <div className="mt-6 h-px bg-gradient-to-r from-purple-500/30 via-white/5 to-transparent" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
