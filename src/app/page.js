import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col">
      <Navbar />
      <div className="mt-12 container mx-auto px-12 py-4">
        <HeroSection />
        <Achievements />
        <AboutSection />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}