import React from "react";

const infoItems = [
  { icon: "👨‍💻", label: "Name", value: "Moaz " },
  { icon: "✉️", label: "Email", value: "moaz@gmail.com" },
  { icon: "📍", label: "Location", value: "cairo, Egypt" },
  { icon: "🔍", label: "Status", value: "Open to opportunities" },
];

const skills = [
  "React & Next.js",
  "JavaScript / TypeScript",
  "Tailwind CSS / Framer Motion",
  "MongoDB / MySQL / REST APIs",
];

const philosophyItems = [
  {
    icon: "⚡",
    title: "Performance First",
    description: "Optimized, scalable, and lightning-fast applications.",
  },
  {
    icon: "♿",
    title: "Accessibility Matters",
    description: "Building for everyone, regardless of ability.",
  },
  {
    icon: "🔧",
    title: "Clean Code",
    description: "Maintainable, readable, and developer-friendly code.",
  },
  {
    icon: "🎨",
    title: "User-Centered Design",
    description: "Interfaces that delight and solve real problems.",
  },
];

const InfoCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-3 bg-background p-4 md:p-6 rounded-2xl border border-gray-500/50 hover:border-purple-500 hover:shadow-lg transition">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-purple-500/10 text-xl md:text-2xl text-purple-500">
      {icon}
    </div>
    <div className="text-center">
      <p className="text-xs md:text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-foreground text-sm md:text-base text-white">
        {value}
      </p>
    </div>
  </div>
);

const SkillBadge = ({ skill }) => (
  <span className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium bg-purple-500/10 text-purple-500 rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition">
    {skill}
  </span>
);

const PhilosophyCard = ({ icon, title, description }) => (
  <div className="p-4 md:p-6 bg-card/1 rounded-xl border border-gray-500/50 hover:shadow-lg transition">
    <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-purple-500 mb-2 md:mb-3">
      <span>{icon}</span> {title}
    </h4>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative bg-background py-12 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-background"></div>
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Full-Stack Developer passionate about crafting beautiful and
            scalable digital solutions.
          </p>
        </div>

        {/* Intro Card */}
        <div
          data-aos="fade-right"
          className="bg-card/80 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-purple-500/50 shadow-xl mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-500-foreground flex items-center justify-center text-4xl md:text-5xl">
              👨‍💻
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                Hello, I'm <span className="text-purple-500">Moaz </span>
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-3">
                With 1+ year of experience as a{" "}
                <span className="text-purple-500 font-semibold">
                  Full-Stack Developer
                </span>
                , I specialize in building intuitive, fast, and visually
                engaging web applications.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                I work across the stack — from crafting clean UI to designing
                robust backends — with a focus on performance, scalability, and
                user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            Personal Info
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {infoItems.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <h3 className="text-xl  md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Development Philosophy */}
        <div data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            Development Philosophy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
