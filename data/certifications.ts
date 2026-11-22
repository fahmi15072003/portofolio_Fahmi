export type Certificate = {
  title: string;
  organizer: string;
  category: string;
  year: string;
  description: string;
  type: "Certifications" | "Training" | "Activities";
  image: string;
  images?: string[];
  featured?: boolean; // tampil di beranda
};

export const certificates: Certificate[] = [
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
    featured: true,
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
    featured: true,
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
    featured: true,
    image: "/images/certifications/Sertifikat-PKM.jpg",
  },
  {
    title: "Copyright Registration – Cyberbullying Detection",
    organizer: "Ministry of Law of the Republic of Indonesia",
    category: "Intellectual Property",
    year: "2025",
    description:
      "Copyright registration for a written work entitled Sosialisasi Mengenai Deteksi Kalimat Cyber Bullying pada Anak SMP Yaspiin Pasirmulya.",
    type: "Activities",
    featured: true,
    image: "/images/certifications/sertifikasi-HAKI.jpg",
  },
  {
    title: "Basketball Team Chairman",
    organizer: "Emperor Basketball",
    category: "Leadership & Organization",
    year: "2020–2021",
    description:
      "Served as chairman of the basketball team, coordinating team activities, organizing members, and supporting team development.",
    type: "Activities",
    featured: true,
    image: "/images/certifications/sertifikat-ketua-basketball.jpg",
  },
  {
    title: "Committee – Scrum in Action",
    organizer: "Faculty of Computer Science, UBP Karawang",
    category: "Event Committee | Equipment Division",
    year: "2026",
    description:
      "Served as a committee member in the equipment division for a public lecture on Scrum, collaborative software development, adaptability, and industry-ready skills.",
    type: "Activities",
    image: "/images/certifications/Panitia-Kuliah-Umum-Scrum-in-Action.jpg",
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