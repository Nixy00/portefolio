import { useEffect } from "react";
import Background from "./components/Background.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

// Halo lumineux qui suit la souris sur les cartes (.spotlight).
function useSpotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

export default function App() {
  useSpotlight();
  return (
    <>
      <Background />
      <ScrollProgress />
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
