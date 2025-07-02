import Footer from "../Components/HomePageComponent/Footer";
import Hero from "../Components/HomePageComponent/hero";
import Skills from "../Components/HomePageComponent/skills";
import About from "../Components/HomePageComponent/About";
import Contact from "../Components/HomePageComponent/Contact";
import Projects from "../Components/HomePageComponent/Project";
import Nav from "./Nave";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8 relative">
        <div className="fixed inset-0  -z-10 bg-[url('https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf065_noise-50.avif')]"></div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
