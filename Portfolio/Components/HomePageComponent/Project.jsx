// components/ProjectsSection.jsx
import React from "react";

const projects = [
  {
    title: "Raqmiz",
    description:
      "RIQMIZ is a digital product marketplace built with Next.js and Tailwind CSS, featuring full Dark Mode support.",
    image: "https://placehold.co/600x400",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    live: "https://riqmaz.vercel.app/",
    source: "https://github.com/DevNexEssam/raqmiz",
  },
  {
    title: "UniPortal",
    description:
      "A full-stack university student portal that enables students to manage their academic materials efficiently with course management and scheduling.",
    image: "https://placehold.co/600x400",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    live: "https://uni-portal-msbv.vercel.app/",
    source: "https://github.com/DevNexEssam/uni-portal",
  },
];

const ProjectCard = ({ project }) => (
  <div
    data-aos="fade-right"
    className="group bg-background-alt border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
  >
    <div className="flex flex-col md:flex-row">
      <div className="relative md:w-2/5 h-60 md:h-auto">
        <img
          alt={project.title}
          src={project.image}
          className="object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0 w-full h-full"
        />
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-500 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.live}
            className="flex items-center gap-2 text-sm px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Live Demo
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.source}
            className="flex items-center gap-2 text-sm px-4 py-2 border border-border rounded-lg text-white hover:text-primary transition"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          A selection of featured projects I've worked on, along with other
          projects demonstrating my skills.
        </p>
      </div>

      <h3 class="text-xl font-semibold mb-8 text-white border-b border-gray-700 border-border pb-2">
        Featured Projects
      </h3>
      {/* Projects Grid */}
      <div className="grid gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
