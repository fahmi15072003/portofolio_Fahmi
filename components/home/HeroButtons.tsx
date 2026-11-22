import Button from "../ui/Button";
import { FiDownload, FiSend } from "react-icons/fi";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Button href="/#contact" variant="primary">
        <span>Hubungi Saya</span>
        <FiSend className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
      </Button>

      <Button href="/cv.pdf" variant="secondary" external>
        <FiDownload className="text-lg text-purple-300 transition-transform duration-300 group-hover:translate-y-0.5" />
        <span>Download CV</span>
      </Button>
    </div>
  );
}