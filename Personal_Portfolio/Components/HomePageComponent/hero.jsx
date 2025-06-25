import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = text.split("");
    if (textRef.current) {
      textRef.current.innerHTML = letters
        .map((char) => `<span class="inline-block opacity-0">${char}</span>`)
        .join("");

      gsap.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.5,
      });
    }
  }, [text]);

  return (
    <span
      ref={textRef}
      className="text-yellow-500 text-5xl sm:text-6xl font-black inline-block translate-y-2"
    ></span>
  );
};

const HeroLottie = ({ className }) => (
  <div className={`${className} rounded-xl overflow-hidden`}>
    <iframe
      src="https://lottie.host/embed/fc4f8324-db37-4a7b-86c1-20363b5ba4f3/uwB7HgQ9o3.lottie?speed=1&direction=1&autoplay=1&loop=1"
      className="w-full h-full"
      allowFullScreen
    ></iframe>
  </div>
);

export default function Hero() {
  return (
    <section
      id="Home"
      className="container mx-auto h-170 flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-16 text-white"
    >
      <HeroLottie className="block md:hidden w-full h-[400px]" />

      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-7xl font-extrabold leading-tight wrap-normal mb-0">
          Hey there! 👋, I'm <AnimatedText text="Abood-R" />
        </h1>
        <h1 className="text-md sm:text-xl font-extrabold leading-tight wrap-normal">
          <AnimatedText text="Mushtaha" />
        </h1>

        <p className="text-lg sm:text-xl text-gray-300">
          A <span className="text-yellow-500">Frontend Developer</span>{" "}
          passionate about building modern, fast, and responsive web apps using
          <span className="text-yellow-500"> React.js and Next.js </span>.
        </p>
        <p className="text-md sm:text-lg text-gray-400">
          I turn ideas into interactive, accessible, and delightful user
          experiences.
        </p>
      </div>

      <HeroLottie className="hidden md:block flex-1 h-[500px]" />
    </section>
  );
}
