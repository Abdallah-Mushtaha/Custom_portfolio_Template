import Contact from "../Components/HomePage/Contact";
import Footer from "../Components/HomePage/Footer";
import Hero from "../Components/HomePage/hero";
import Skills from "../Components/HomePage/skills";
import About from "../Components/HomePageComponent/About";
import Projects from "../Components/Project";
import Nav from "./Nave";

export default function Home() {
  return (
    <dev className="container mx-auto px-4 py-8 relative">
      <div className="fixed inset-0  -z-10 bg-[url('https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf065_noise-50.avif')]"></div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </dev>
  );
}
