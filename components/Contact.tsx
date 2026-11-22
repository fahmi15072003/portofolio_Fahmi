"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

// Isi nomor WhatsApp dengan format internasional, tanpa +, spasi, atau tanda hubung.
// Contoh: nomor 0812-3456-7890 ditulis "6281234567890" (angka 0 di depan diganti 62).
const WHATSAPP_NUMBER = "821-2229-0913";
const WHATSAPP_MESSAGE =
  "Halo Fahmi, saya melihat portofolio Anda dan ingin berdiskusi.";

// Tampilan nomor di kartu, misalnya +62 812-3456-7890
const formatPhone = (num: string) => {
  const local = num.replace(/^62/, "");
  return `+62 ${local.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3")}`;
};

type ContactItem = {
  label: string;
  icon: IconType;
  href: string;
  text: string;
  external?: boolean;
};

// Kartu dengan href kosong tidak akan ditampilkan.
const contacts: ContactItem[] = [
  {
    label: "Email",
    icon: FiMail,
    href: "mailto:muhamadfahmijalaluddinihsan@gmail.com",
    text: "muhamadfahmijalaluddinihsan@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/muhamad-fahmi-jalaluddin-ihsan-27b484361",
    text: "Muhamad Fahmi Jalaluddin Ihsan",
    external: true,
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: `https://wa.me/6282122290913?s=p
    )}`,
    text: formatPhone(WHATSAPP_NUMBER),
    external: true,
  },
  {
    label: "Instagram",
    icon: FiInstagram,
    href: "https://www.instagram.com/fytxv/",
    text: "@fytxv",
    external: true,
  },
];

export default function Contact() {
  const visibleContacts = contacts.filter((item) => item.href);

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow dekoratif di latar belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Contact Information"
          title="Let's Start a Conversation"
          subtitle="Open to job opportunities, project collaborations, or just a friendly chat. Feel free to reach out through any of the channels below."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleContacts.map(({ label, icon: Icon, href, text, external }) => (
            <Card
              key={label}
              className="flex gap-4 items-center border border-white/5 hover:border-purple-500/20 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Icon className="text-xl" />
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {label}
                </h4>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm font-bold text-white hover:text-purple-300 transition-colors duration-300 block break-all mt-1"
                >
                  {text}
                </a>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}