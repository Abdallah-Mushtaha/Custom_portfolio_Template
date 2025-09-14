import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Footer from "../Components/HomePageComponent/Footer";
import Hero from "../Components/HomePageComponent/hero";
import Skills from "../Components/HomePageComponent/skills";
import About from "../Components/HomePageComponent/About";
import Contact from "../Components/HomePageComponent/Contact";
import Projects from "../Components/HomePageComponent/Project";
import Nav from "./Nave";
import TechStack from "../Components/HomePageComponent/tecnecalSkills";
import ExperienceSection from "../Components/HomePageComponent/Education";

export default function Home() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = bgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(bgRef.current, {
        backgroundImage: `radial-gradient(circle at ${x}% ${y}%, rgba(139,92,246,0.15), transparent 80%)`,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Nav />
      <div
        ref={bgRef}
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "rgba(15,15,15,0.95)",
        }}
      ></div>

      <div className="container mx-auto px-4 py-8 mt-25 relative">
        <Hero />
      </div>
      <About />
      <div className="container mx-auto px-4 py-8 relative">
        <Skills />
      </div>

      <Projects />
      <TechStack />
      <ExperienceSection />

      <Contact />
      <Footer />
    </>
  );
}
