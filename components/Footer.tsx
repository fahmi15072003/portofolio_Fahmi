import Container from "./Container";

const links = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact Information", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/5 bg-slate-950/40 py-8 backdrop-blur-md">
      <Container>
        <div className="flex select-none flex-col items-center justify-between gap-4 text-xs font-light text-gray-500 md:flex-row md:text-sm">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p>
              © {currentYear} Muhamad Fahmi Jalaluddin Ihsan. Designed and built
              with Next.js & Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-300 hover:text-purple-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}