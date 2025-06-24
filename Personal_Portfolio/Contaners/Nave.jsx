import "../src/App.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 bg-black/50 backdrop-blur-sm shadow z-50  ">
      <nav className="font-bold">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 h-16">
          <a href="#home" className="text-white text-xl font-semibold ">
            <span className="text-yellow-500">A</span>bood
          </a>

          <ul className="flex gap-6 text-white text-sm md:text-base">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
