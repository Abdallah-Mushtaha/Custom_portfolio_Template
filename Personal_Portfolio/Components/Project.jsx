const projects = [
  {
    name: "Project One",
    desc: "A simple project description that explains the purpose of the project and what technologies were used.",
    mainImage: "https://placehold.co/400x200",
    gallery: [
      "https://placehold.co/120x80?text=1",
      "https://placehold.co/120x80?text=2",
      "https://placehold.co/120x80?text=3",
    ],
    technologies: ["React", "Tailwind", "API"],
    live: "#",
    source: "#",
  },
  {
    name: "Project One",
    desc: "A simple project description that explains the purpose of the project and what technologies were used.",
    mainImage: "https://placehold.co/400x200",
    gallery: [
      "https://placehold.co/120x80?text=1",
      "https://placehold.co/120x80?text=2",
      "https://placehold.co/120x80?text=3",
    ],
    technologies: ["React", "Tailwind", "API"],
    live: "#",
    source: "#",
  },
  {
    name: "Project Two",
    desc: "Another interesting project that showcases animation, interactivity, and clean UI/UX.",
    mainImage: "https://placehold.co/400x200",
    gallery: [
      "https://placehold.co/120x80?text=A",
      "https://placehold.co/120x80?text=B",
      "https://placehold.co/120x80?text=C",
    ],
    technologies: ["Vue", "Firebase", "SASS"],
    live: "#",
    source: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Things I Built When No One Was Watching
      </h2>
      <p className="text-sm font-italic mb-12 text-center">
        A glimpse into the experiments, late-night ideas, and code I couldn't
        stop writing
      </p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between items-center gap-10 bg-black/60 rounded-xl overflow-hidden shadow-lg p-6"
          >
            <div className="relative w-full md:w-1/2 h-48 md:h-auto group">
              <img
                src={project.mainImage}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {project.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={`w-24 h-16 object-cover rounded shadow-md border border-white transition-transform duration-300 ease-in-out ${
                      i === 1 ? "transform -translate-y-4" : ""
                    }`}
                    style={{
                      transform: i === 1 ? "translateY(-1rem)" : "none",
                      zIndex: 10 - i,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-gray-300">{project.desc}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-200/20 text-white border border-yellow-700 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 hover:bg-yellow-700 text-gray font-semibold py-2 px-4 rounded transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-500 text-gray-100 hover:bg-black/50 hover:text-white font-semibold py-2 px-4 rounded transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
