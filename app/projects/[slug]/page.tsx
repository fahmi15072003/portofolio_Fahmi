
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import { FiArrowLeft, FiCode, FiLayers, FiCompass } from "react-icons/fi";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectDiagrams from "@/components/ProjectDiagrams";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <Container>
          <h1 className="text-2xl font-bold text-white text-center">
            Proyek tidak ditemukan
          </h1>
          <div className="flex justify-center mt-6">
            <Button href="/#projects" variant="outline">
              <FiArrowLeft className="mr-2" />
              Kembali ke Projects
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background text-foreground">

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-40" />
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
      </div>

      <Container>

        {/* Tombol Kembali */}
        <div className="mb-10">
          <Button href="/#projects" variant="outline" className="gap-2">
            <FiArrowLeft />
            <span>Kembali ke Projects</span>
          </Button>
        </div>

        {/* Project Header */}
        <div className="max-w-3xl mb-12">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {project.title}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            {project.description}
          </p>

        </div>

        {/* Project Gallery */}
        <div className="mb-12">
          <ProjectGallery
            images={project.images}
            projectTitle={project.title}
          />
        </div>
          {/* Diagrams & Documentation */}
          {project.slug === "perpustakaan-sekolah-berbasis-web" && (
            <ProjectDiagrams projectName="Library Management System" />
          )}
          {/* Project Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Problem */}
            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiCompass className="text-blue-400" />
                Latar Belakang & Permasalahan
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {project.problem}
              </p>
            </Card>

            {/* Solution */}
            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiCode className="text-cyan-400" />
                Solusi yang Dikembangkan
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </Card>

            {/* Architecture */}
            <Card hoverEffect={false}>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FiLayers className="text-indigo-400" />
                Arsitektur & Teknologi Pengembangan
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {project.architecture}
              </p>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Technologies */}
            <Card className="border-blue-500/10">
              <h3 className="text-lg font-bold text-white mb-4">
                Teknologi
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag
                    key={tech}
                    variant="slate"
                    className="text-xs py-0.5 px-2"
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
            </Card>

            {/* Results */}
            <Card>
              <h3 className="text-lg font-bold text-white mb-4">
                Hasil & Kontribusi
              </h3>

              <ul className="space-y-3 text-sm text-gray-400">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </Card>

          </div>
        </div>
      </Container>
    </main>
  );
}
 