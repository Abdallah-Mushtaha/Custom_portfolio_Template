const skills = [
  {
    name: "HTML",
    desc: "Proficient in creating semantic and accessible HTML structures.",
    img: ["../Images/HTML5.svg"],
    shadow: "rgba(255,87,34,0.5)",
  },
  {
    name: "CSS",
    desc: "Experienced in responsive design and modern CSS techniques.",
    img: ["../Images/css-3.svg"],
    shadow: "rgba(33,150,243,0.5)",
  },
  {
    name: "JavaScript",
    desc: "Skilled in writing clean, efficient, and maintainable JavaScript code.",
    img: ["../Images/JAVASCRIPT.svg"],
    shadow: "rgba(255,193,7,0.5)",
  },
  {
    name: "React",
    desc: "Proficient in building dynamic user interfaces with React.",
    img: ["../Images/REACT.svg"],
    shadow: "rgba(97,218,251,0.5)",
  },
  {
    name: "Node.js",
    desc: "Experienced in building server-side applications with Node.js.",
    img: ["../Images/next-js.svg"],
    shadow: "rgba(130,130,130,0.5)",
  },
  {
    name: "Git & GitHub",
    desc: "Familiar with version control and collaborative development using Git.",
    img: ["../Images/GIT.svg", "../Images/GITHUB.svg"],
    shadow: "rgba(130,130,130,0.5)",
  },
  {
    name: "Vite",
    desc: "Vite is a blazing fast frontend build tool powering the next generation of web applications.",
    img: ["../Images/vite.svg"],
    shadow: "rgba(143,97,233,0.5)",
  },
  {
    name: "Bootstrap",
    desc: "Bootstrap is a powerful front-end framework for faster and easier web development.",
    img: ["../Images/bootstrap.svg"],
    shadow: "rgba(86,61,124,0.5)",
  },
  {
    name: "Tailwind",
    desc: "Tailwind CSS is a utility-first CSS framework for creating custom designs without leaving your HTML.",
    img: ["../Images/TAILWIND.svg"],
    shadow: "rgba(56,189,248,0.5)",
  },
];

export default function Skills() {
  return (
    <section className="container mx-auto px-4 py-8 relative mt-15">
      <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
      <section className="text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="skill-item bg-black/50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="dev flex justify-center items-center gap-3 flex-wrap">
                  {skill.img.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={skill.name}
                      className="w-16 h-16 mb-4"
                      style={{
                        filter: `drop-shadow(0 5px 5px ${skill.shadow})`,
                      }}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {skill.name}
                </h3>
                <p className="text-center my-3">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
