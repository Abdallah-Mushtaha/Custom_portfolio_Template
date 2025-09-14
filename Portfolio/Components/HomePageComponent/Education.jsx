import React from "react";

const timelineData = {
  work: [
    {
      title: "Front-End Developer",
      company: "Freelance (Upwork & Nafathli)",
      location: "Remote",
      period: "2025 - Present",
      points: [
        "Developing modern web applications using Next.js and Tailwind CSS",
        "Building interactive UI components with a strong focus on performance and user experience",
        "Collaborating with clients to deliver customized front-end solutions",
        "Optimizing web apps for SEO and accessibility",
      ],
    },
    {
      title: "WordPress Developer",
      company: "Tech Solutions Company",
      location: "Alexandria, Egypt",
      period: "2024",
      points: [
        "Worked on building and customizing WordPress websites",
        "Optimized website performance and enhanced UI/UX",
        "Integrated plugins and third-party APIs for additional functionalities",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor's Degree in Computer Science (In Progress)",
      company: "Borg El Arab Technological University",
      location: "Alexandria, Egypt",
      period: "2022 - Present",
      points: [
        "Currently studying computer science with a focus on front-end development, web technologies, and modern frameworks. Working on various academic projects related to web applications and AI.",
      ],
    },
  ],
};

const TimelineItem = ({ title, company, location, period, points }) => (
  <div className="relative">
    <div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-purple-600"></div>
    <div className="mb-2">
      <h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4>
      <div className="text-purple-600 font-medium text-sm sm:text-base">
        {company}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3">
      <div className="flex items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 384 512"
          className="mr-1 h-3 w-3 sm:h-4 sm:w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
        </svg>
        {location}
      </div>
      <div className="flex items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="mr-1 h-3 w-3 sm:h-4 sm:w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
        {period}
      </div>
    </div>

    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-500">
      {points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 md:py-20 bg-[#10141a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
            Experience &amp; Education
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-purple-600 mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Work Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-purple-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
              </svg>
              Work Experience
            </h3>
            <div className="relative border-l-2 border-purple-600/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
              {timelineData.work.map((item, idx) => (
                <TimelineItem key={idx} {...item} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl text-white sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-purple-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
              </svg>
              Education
            </h3>
            <div className="relative border-l-2 border-purple-600/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
              {timelineData.education.map((item, idx) => (
                <TimelineItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
