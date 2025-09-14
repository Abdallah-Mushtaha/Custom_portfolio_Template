import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    icon: <SiReact size={40} />,
    tags: ["React", "Hooks", "JSX", "Components"],
  },
  {
    name: "Next.js",
    description: "The React framework for production",
    icon: <SiNextdotjs size={40} />,
    tags: ["Next.js", "SSR", "SSG", "API Routes"],
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework",
    icon: <SiTailwindcss size={40} />,
    tags: ["Tailwind", "Responsive", "Design", "Utilities"],
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript at any scale",
    icon: <SiTypescript size={40} />,
    tags: ["TypeScript", "Types", "Interfaces", "Safety"],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 " id="tech-stack">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack I Use
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Here are the main technologies and tools I use to build
            high-quality, scalable projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-[#0d0f18] dark:bg-[#0d0f18] p-6 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-aos="zoom-in"
            >
              <div className="flex items-center justify-start mb-4 text-purple-500">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {tech.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
