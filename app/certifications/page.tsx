
"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import {
  FaAward,
  FaGraduationCap,
  FaCertificate,
  FaBookOpen,
  FaUsers,
  FaTimes,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";

interface Certification {
  title: string;
  organizer: string;
  category: string;
  year: string;
  description: string;
  type: "Certifications" | "Training" | "Activities";
  image?: string;
  images?: string[];
}

const certifications: Certification[] = [
  // ==========================================
  // CERTIFICATIONS
  // ==========================================
  {
    title: "Google IT Automation with Python",
    organizer: "Google | Coursera",
    category: "Professional Certificate",
    year: "2025",
    description:
      "Completed a six-course professional certificate covering Python programming, operating system interaction, Git and GitHub, troubleshooting, configuration management, cloud technologies, and automation.",
    type: "Certifications",
    image:
      "/images/certifications/Sertifikasi-GoogleCoursera-Google-IT-Automation-with-Python.jpg",
    images: [
      "/images/certifications/Sertifikasi-GoogleCoursera-Google-IT-Automation-with-Python.jpg",
      "/images/certifications/GoogleCoursera-Crash-Course-on-Python.jpg",
      "/images/certifications/GoggleCoursera-Using-Python-to-interact-with-the-Operating-System.jpg",
      "/images/certifications/GoogleCoursera-Introduction-to-Git-and-GitHub.jpg",
      "/images/certifications/GoogleCoursera-Troubleshooting-and-Debugging-Techniques.jpg",
      "/images/certifications/GoogleCoursera-Configuration-Management-and-the-Cloud.jpg",
      "/images/certifications/GoogleCoursera-Automating-Real-World-Tasks-with-Python.jpg",
    ],
  },

  // ==========================================
  // TRAINING
  // ==========================================
  {
    title: "Motorcycle Injection System Servicing",
    organizer: "UPTD BLK Disnakertrans Kabupaten Karawang",
    category: "Competency-Based Training",
    year: "2023",
    description:
      "Completed competency-based training in motorcycle injection system servicing, covering fundamental maintenance and technical servicing skills.",
    type: "Training",
    image: "/images/certifications/training-blk2.jpg",
  },

  // ==========================================
  // ACTIVITIES & ACHIEVEMENTS
  // ==========================================
  {
    title: "Program Kreativitas Mahasiswa (PKM) 2025",
    organizer: "UBP Karawang | BELMAWA Kemdiktisaintek RI",
    category: "Student Research & Innovation",
    year: "2025",
    description:
      "Participated as a team member in the 2025 Student Creativity Program.",
    type: "Activities",
    image: "/images/certifications/Sertifikat-PKM.jpg",
  },
  {
  title: "Seminar Pengenalan Digital Talent Scholarship",
  organizer: "BPPTIK & Vocational School Graduate Academy",
  category: "Digital Talent Scholarship",
  year: "2023",
  description:
    "Participant in the Digital Talent Scholarship introduction seminar organized by BPPTIK and Vocational School Graduate Academy.",
  type: "Activities",
  image:
    "/images/certifications/Sertifikat-SEMINAR-PENGENALAN-DIGITAL-TALENT-SCHOLARSHIP-BPPTIK-DAN-VOCATIONAL-SCHOOL-GRADUATE-ACADEMY.jpg",
},
  {
    title: "Committee – Scrum in Action",
    organizer: "Faculty of Computer Science, UBP Karawang",
    category: "Event Committee | Equipment Division",
    year: "2026",
    description:
      "Served as a committee member in the equipment division for a public lecture on Scrum, collaborative software development, adaptability, and industry-ready skills.",
    type: "Activities",
    image: "/images/certifications/Panitia-Kuliah Umum-Scrum-in-Action.jpg",
  },
  {
    title: "Copyright Registration – Cyberbullying Detection",
    organizer: "Ministry of Law of the Republic of Indonesia",
    category: "Intellectual Property",
    year: "2025",
    description:
      "Copyright registration for a written work entitled Sosialisasi Mengenai Deteksi Kalimat Cyber Bullying pada Anak SMP Yaspiin Pasirmulya.",
    type: "Activities",
    image: "/images/certifications/sertifikasi-HAKI.jpg",
  },
  {
    title: "Inaugurasi Fakultas Ilmu Komputer 2024",
    organizer: "Faculty of Computer Science, UBP Karawang",
    category: "Student Activity",
    year: "2024",
    description:
      "Participated in the Faculty of Computer Science inauguration activity, focused on strengthening togetherness, student relationships, and a progressive academic environment.",
    type: "Activities",
    image: "/images/certifications/sertifikat-inaugrasi.jpg",
  },
  {
    title: "Seminar Nasional Jatidiri Bangsa",
    organizer: "Universitas Buana Perjuangan Karawang",
    category: "National Seminar",
    year: "2022",
    description:
      "Participated in a national seminar discussing the prospects and challenges of university students in facing social change.",
    type: "Activities",
    image: "/images/certifications/sertifikat-jati-diri-bangsa.jpg",
  },
  {
    title: "LDKK",
    organizer: "Universitas Buana Perjuangan Karawang",
    category: "Leadership & Character Development",
    year: "2022",
    description:
      "Participated in student leadership and character development activities.",
    type: "Activities",
    image: "/images/certifications/sertifikat-LDKK.jpg",
  },
  {
  title: "Basketball Team Chairman",
  organizer: "Emperor Basketball",
  category: "Leadership & Organization",
  year: "2021 sampai 2022",
  description:
    "Served as chairman of the basketball team, coordinating team activities, organizing members, and supporting team development.",
  type: "Activities",
  image: "/images/certifications/sertifikat-ketua-basketball.jpg",
},
  {
    title: "Pengenalan Kehidupan Kampus bagi Mahasiswa Baru",
    organizer: "Universitas Buana Perjuangan Karawang",
    category: "PKKMB",
    year: "2022",
    description:
      "Participated in the campus introduction program for new students to learn about university life, the academic environment, and student activities.",
    type: "Activities",
    image: "/images/certifications/sertifikat-ppkmb.jpg",
  },
];

const filters = ["All", "Certifications", "Training", "Activities"] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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
      duration: 0.4,
    },
  },
};

export default function CertificationsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Gallery state
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState("");

  // Open gallery
  const openCertificate = (certification: Certification) => {
    const images = certification.images ?? (
      certification.image ? [certification.image] : []
    );

    if (images.length === 0) return;

    setSelectedImages(images);
    setCurrentImageIndex(0);
    setGalleryTitle(certification.title);
  };

  // Close gallery
  const closeCertificate = () => {
    setSelectedImages([]);
    setCurrentImageIndex(0);
    setGalleryTitle("");
  };

  // Next image
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev >= selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  // Previous image
  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev <= 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  // Filter
  const filteredCertifications =
    activeFilter === "All"
      ? certifications
      : certifications.filter((item) => item.type === activeFilter);

  // Icon
  const getIcon = (type: Certification["type"]) => {
    switch (type) {
      case "Certifications":
        return <FaCertificate className="text-purple-400 text-xl" />;
      case "Training":
        return <FaBookOpen className="text-cyan-400 text-xl" />;
      case "Activities":
        return <FaUsers className="text-pink-400 text-xl" />;
      default:
        return <FaAward className="text-purple-400 text-xl" />;
    }
  };

  return (
    <main className="min-h-screen py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        {/* Page Title */}
        <SectionTitle
          badge="Professional Development"
          title="Certifications & Training"
          subtitle="A collection of professional certifications, technical training, academic activities, and achievements that reflect my learning journey and development."
        />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Card className="border border-white/5 bg-slate-950/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <FaAward className="text-purple-400 text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Certifications & Courses
                </p>
                <p className="text-xl font-bold text-white">
                  Continuous Learning
                </p>
              </div>
            </div>
          </Card>

          <Card className="border border-white/5 bg-slate-950/40">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <FaGraduationCap className="text-cyan-400 text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Learning Focus</p>
                <p className="text-xl font-bold text-white">
                  IT, Programming & Technical Skills
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-purple-500/15 border-purple-500/40 text-purple-300"
                  : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certification Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCertifications.map((certification) => (
            <motion.div
              key={certification.title}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full border border-white/5 bg-slate-950/40 relative group overflow-hidden">
                {/* Thumbnail */}
                {certification.image && (
                  <button
                    onClick={() => openCertificate(certification)}
                    className="w-full mb-5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] relative"
                    aria-label={`Preview ${certification.title}`}
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={certification.image}
                        alt={certification.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </button>
                )}

                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    {getIcon(certification.type)}
                  </div>

                  <span className="text-xs text-gray-500 border border-white/10 rounded-full px-3 py-1">
                    {certification.year}
                  </span>
                </div>

                {/* Information */}
                <div className="mb-4">
                  <span className="text-xs text-purple-400 font-medium">
                    {certification.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-purple-300 transition-colors">
                    {certification.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {certification.organizer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {certification.description}
                </p>

                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-gray-400">
                    {certification.type}
                  </span>
                </div>

                {/* View Certificate */}
                {certification.image && (
                  <button
                    onClick={() => openCertificate(certification)}
                    className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-purple-500/20 bg-purple-500/5 text-purple-300 text-sm font-medium hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    {certification.images && certification.images.length > 1
                      ? `View Certificates (${certification.images.length})`
                      : "View Certificate"}
                  </button>
                )}

                <div className="mt-6 h-px bg-gradient-to-r from-purple-500/30 via-white/5 to-transparent" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">
              No items available in this category.
            </p>
          </div>
        )}
      </Container>

      {/* ==========================================
          CERTIFICATE GALLERY MODAL
      ========================================== */}
      {selectedImages.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeCertificate}
        >
          {/* Close Button */}
          <button
            onClick={closeCertificate}
            className="absolute top-5 right-5 z-[110] w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close certificate gallery"
          >
            <FaTimes />
          </button>

          {/* Gallery Container */}
          <div
            className="relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h3 className="text-white text-sm md:text-base font-medium mb-4 text-center">
              {galleryTitle}
            </h3>

            {/* Main Image */}
            <div className="w-full h-[65vh] md:h-[72vh] flex items-center justify-center relative">
              <img
                src={selectedImages[currentImageIndex]}
                alt={`${galleryTitle} - Certificate ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Previous Button */}
              {selectedImages.length > 1 && (
                <button
                  onClick={previousImage}
                  className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-purple-500/40 transition-all"
                  aria-label="Previous certificate"
                >
                  <FaChevronLeft />
                </button>
              )}

              {/* Next Button */}
              {selectedImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white hover:bg-purple-500/40 transition-all"
                  aria-label="Next certificate"
                >
                  <FaChevronRight />
                </button>
              )}
            </div>

            {/* Counter */}
            <div className="mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              Certificate {currentImageIndex + 1} of {selectedImages.length}
            </div>

            {/* Thumbnails */}
            {selectedImages.length > 1 && (
              <div className="mt-4 flex gap-2 max-w-full overflow-x-auto pb-3 px-1">
                {selectedImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 overflow-hidden rounded-lg border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-purple-400 opacity-100"
                        : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                    aria-label={`Go to certificate ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
