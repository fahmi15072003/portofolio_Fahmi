import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-colors duration-300 hover:text-purple-400"
          >
            <Image src="/icon.svg" alt="" width={30} height={30} aria-hidden="true" />
            Angel Alvarez
          </Link>

          <ul className="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex">
            <li><Link href="/#about" className="transition-colors duration-300 hover:text-white">About me</Link></li>
            <li><Link href="/#experience" className="transition-colors duration-300 hover:text-white">Experience</Link></li>
            <li><Link href="/#projects" className="transition-colors duration-300 hover:text-white">Projects</Link></li>
            <li><Link href="/#contact" className="transition-colors duration-300 hover:text-white">Contact Information</Link></li>
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Junniora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 transition-colors duration-300 hover:text-white"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
