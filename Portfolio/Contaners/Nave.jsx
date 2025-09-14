import React, { useState } from "react";
import "../src/App.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { label: "Home", key: "Home", href: "/" },
    { label: "About", key: "about", href: "#about" },
    { label: "Skills", key: "skills", href: "#skills" },
    { label: "Projects", key: "projects", href: "#projects" },
    { label: "Contact", key: "contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "github",
      icon: "fab fa-github",
      href: "https://github.com/",
      desktop: true,
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/",
      desktop: true,
    },
    {
      name: "email",
      icon: "fas fa-envelope",
      href: "mailto:moaz@gmail.com",
      desktop: true,
    },
    {
      name: "instagram",
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/",
      desktop: false,
    },
  ];

  const scrollToSection = (key, href) => {
    setActiveLink(key);
    if (href.startsWith("#")) {
      const section = document.getElementById(key);
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y - 60, behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 py-2 
                   bg-transparent md:bg-background/80 backdrop-blur-sm rounded-full 
                   w-full max-w-4xl px-4 sm:px-6 lg:px-8 "
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a className="text-xl font-bold text-white px-4" href="/">
          Moaz<span className="text-purple-500">.</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.key, link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeLink === link.key
                  ? "text-purple-500 bg-purple-500/10"
                  : "text-gray-300 hover:text-purple-500 hover:bg-purple-500/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks
            .filter((s) => s.desktop)
            .map((social, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-300 hover:text-purple-500 transition-colors text-lg rounded-full hover:bg-purple-500/10"
                href={social.href}
              >
                <i className={social.icon}></i>
              </a>
            ))}

          {/* More Menu */}
          <div className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="p-2 text-gray-300 hover:text-purple-500 transition-colors text-lg rounded-full hover:bg-purple-500/10"
            >
              •••
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 top-10 flex flex-col bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-2 space-y-2 border border-gray-700 min-w-[120px]">
                {socialLinks
                  .filter((s) => !s.desktop)
                  .map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-gray-300 hover:text-purple-500 transition-colors text-lg rounded-full hover:bg-purple-500/10"
                      href={social.href}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 focus:outline-none p-2 rounded-full hover:bg-purple-500/10 hover:text-purple-500 transition-all"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-background/95 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-3 animate-fadeIn">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.key, link.href)}
              className={`w-full text-center px-4 py-2 text-sm font-medium rounded-lg transition ${
                activeLink === link.key
                  ? "text-purple-500 bg-purple-500/10"
                  : "text-gray-300 hover:text-purple-500 hover:bg-purple-500/10"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Social icons (mobile row) */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {socialLinks
              .filter((s) => !s.desktop)
              .map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-800 text-gray-300 hover:text-purple-500 transition-colors text-lg rounded-lg"
                  href={social.href}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}
