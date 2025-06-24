import VantaBackground from "./VantaBackground";

const aboutData = [
  {
    name: "Abood Mushtaha",
    img: "../Images/abood.jpg",
    title: "About Me",
    intro:
      "Hello, I'm Abood Mushtaha 👋 I'm a Front-End Developer specializing in building interactive and modern user interfaces 💻.",
    paragraphs: [
      "I have experience turning designs into responsive web pages 🌐, using the latest technologies like HTML 📃, CSS 🎨, JavaScript ⚙️, and frameworks such as React.js ⚛️ or Vue.js 🖼️.",
      "I love creating user experiences (UX/UI) that enhance user engagement 💛 and deliver excellent performance across devices 📱💻.",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 overflow-hidden text-white"
    >
      <VantaBackground />
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {aboutData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
          >
            <img
              src={item.img}
              alt={`${item.name} Avatar`}
              className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
            />

            <div className="text-center md:text-left max-w-2xl md:flex-grow">
              <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
              <p className="mb-4">{item.intro}</p>
              {item.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={i < item.paragraphs.length - 1 ? "mb-4" : ""}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
