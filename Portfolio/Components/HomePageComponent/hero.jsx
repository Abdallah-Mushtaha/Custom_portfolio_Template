import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Button = ({ href, primary, children, icon }) => (
  <a
    href={href}
    className={`relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 overflow-hidden font-medium rounded-full group border transition-all duration-300 text-sm sm:text-base ${
      primary
        ? "border-primary bg-primary text-text-primary hover:scale-[1.03]"
        : "border-border bg-background text-foreground hover:border-primary/50 hover:scale-[1.03]"
    }`}
  >
    {primary && (
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-b from-white/10 to-white/30 group-hover:opacity-100"></span>
    )}
    <span className="relative">{children}</span>
    {icon && (
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    )}
  </a>
);

// Skills Array
const skills = [
  { name: "TypeScript", svg: <span className="text-[#3178C6]">TS</span> },
  { name: "React", svg: <span className="text-[#61DAFB]">⚛</span> },
  {
    name: "Next.js",
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="h-4 w-4 sm:h-5 sm:w-5 text-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
      </svg>
    ),
  },
  { name: "Tailwind CSS", svg: <span className="text-[#06B6D4]">🌀</span> },
  { name: "Mongodb", svg: <span className="text-green-600">🍃</span> },
];

// Skill Item
const SkillItem = ({ name, svg }) => (
  <div
    className="flex items-center gap-1.5 sm:gap-2 
               bg-gray-700/40 px-2.5 py-1.5 sm:px-3 sm:py-2 
               rounded-lg border border-gray-600 
               transition-all duration-300 group 
               hover:bg-transparent hover:border-gray-400 hover:scale-105 
               cursor-pointer"
    title={name}
  >
    <div className="transition-transform group-hover:scale-110">{svg}</div>
    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

export default function Hero() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const texts = [
      "Building Modern Web Apps",
      "Specialized in Next.js and TypeScript",
      "Back-End Developer",
    ];

    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });

    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    texts.forEach((text) => {
      tl.to(textRef.current, {
        duration: text.length * 0.1,
        text: text,
        ease: "none",
      }).to(textRef.current, {
        duration: 0.5,
        text: "",
        delay: 1,
      });
    });
  }, []);

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20 pt-16 md:pt-0 mt-14 mb-12">
      {/* Left Section */}
      <div
        data-aos="fade-right"
        className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1"
      >
        {/* Title & Subtitle */}
        <div className="space-y-3 sm:space-y-4">
          <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 mr-1.5 sm:mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary"></span>
            </span>
            Available for Freelance Work
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I'm{" "}
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Moaz
            </span>
          </h1>
          <div className="h-12 sm:h-14 md:h-16 flex items-center">
            <span
              ref={textRef}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-gray-500"
            ></span>
            <span
              ref={cursorRef}
              className="ml-1 inline-block text-purple-500 font-bold text-xl sm:text-2xl md:text-3xl"
            >
              |
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-xl text-gray-500 leading-relaxed">
          I craft responsive web applications where technologies meet
          creativity. Building exceptional digital experiences with modern full
          stack frameworks.
        </p>
        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-2 sm:pt-4 text-white">
          <Button href="#projects" primary icon>
            View My Work
          </Button>
          <Button
            href="#contact"
            className="border border-gray-300 text-gray-200 hover:bg-purple-500 hover:text-white hover:border-purple-500"
          >
            Contact Me
          </Button>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Tech I work with:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill, i) => (
              <SkillItem key={i} {...skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        className="order-1 md:order-2 flex justify-center relative mb-8 md:mb-0"
        data-aos="fade-left"
      >
        <div className="relative group">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700 bg-gradient-to-br from-primary/5 to-primary-foreground/5 backdrop-blur-sm">
            <img
              src="../Images/Moaz.jpeg"
              alt=" Picture"
              className="object-center object-fit-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
