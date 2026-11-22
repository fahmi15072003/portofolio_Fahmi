import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import MusicPlayer from "@/components/MusicPlayer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Muhamad Fahmi Jalaluddin Ihsan | Informatics Engineering";
const siteDescription =
  "Portfolio of Muhamad Fahmi Jalaluddin Ihsan, an Informatics Engineering graduate focused on web development, data management, and data analysis using Python, Laravel, and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: siteTitle,
    template: "%s | Muhamad Fahmi",
  },
  description: siteDescription,
  keywords: [
    "Muhamad Fahmi Jalaluddin Ihsan",
    "Portfolio",
    "Informatics Engineering",
    "Web Developer",
    "Data Management",
    "Python",
    "Laravel",
    "Next.js",
    "Karawang",
  ],
  authors: [{ name: "Muhamad Fahmi Jalaluddin Ihsan" }],
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: "Portfolio Muhamad Fahmi",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth scroll-pt-24`}
    >
      <body className="relative min-h-screen bg-background text-foreground antialiased selection:bg-purple-500/30 selection:text-purple-100">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        </div>
        <CursorGlow />
        <Navbar />
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}