import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../Src/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

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
        {projects.map((project, index) => {
          const hasEnoughGallery =
            Array.isArray(project.gallery) && project.gallery.length >= 3;

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:justify-between items-center gap-10 bg-black/60 rounded-xl overflow-hidden shadow-lg p-6"
            >
              <div className="relative w-full md:w-1/2 h-48 md:h-auto group">
                <img
                  src={project.mainImage}
                  alt={project.name}
                  className="w-400 h-100 object-cover rounded-lg object-center"
                />

                {hasEnoughGallery && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    {project.gallery.slice(0, 3).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        className={`w-24 h-16 object-cover rounded shadow-md border border-white transition-transform duration-300 ease-in-out ${
                          i === 1 ? "-translate-y-4" : ""
                        }`}
                        style={{ zIndex: 10 - i }}
                      />
                    ))}
                  </div>
                )}
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
          );
        })}
      </div>
    </section>
  );
}
