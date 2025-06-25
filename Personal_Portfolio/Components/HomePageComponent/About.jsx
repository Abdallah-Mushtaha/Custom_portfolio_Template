import VantaBackground from "./VantaBackground";

const aboutData = [
  {
    name: "Abood Mushtaha",
    img: "../Images/abood.jpg",
    title: "About Me",
    intro: `I'm a frontend developer passionate about creating fast, accessible, and modern web interfaces using React.js, Next.js, and the latest web technologies.

I enjoy turning design concepts into functional, interactive user experiences. Whether it's building clean UIs or optimizing performance, I always aim for both aesthetics and usability.`,

    paragraphs: [
      "I have hands-on experience with HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. I regularly use Tailwind CSS and Bootstrap to craft responsive layouts.",
      "I'm comfortable with version control using Git and GitHub, and I enjoy exploring UI/UX design patterns and building side projects that push my skills forward.",
    ],
  },
];

export default function About() {
  return (
    <>
      <section
        id="about"
        className="relative py-20 px-4  overflow-hidden text-white"
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
                className="rounded-full shadow-lg w-48 h-48 md:w-70 md:h-70 object-cover border-2 border-yellow-500 mb-6 md:mb-0 md:mr-8 p-2 border-t-inherit border-s-inherit  border-dashed "
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
    </>
  );
}
