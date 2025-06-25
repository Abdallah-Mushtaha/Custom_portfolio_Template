import React from "react";

// Scroll-to-section handler (يُستخدم في كل الروابط الداخلية)
const scrollToSection = (href) => (e) => {
  e.preventDefault();
  const section = document.getElementById(href.replace("#", ""));
  if (section) {
    const y = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y - 60, behavior: "smooth" });
  }
};

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      onClick={scrollToSection(href)}
      className="hover:text-white transition"
    >
      {children}
    </a>
  </li>
);

const SocialIcon = ({ href, iconClass, alt = "social icon" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition"
  >
    <img src={iconClass} alt={alt} className="w-6 h-6 rounded-md shadow-sm" />
  </a>
);

export default function Footer() {
  const navGroups = [
    ["#Home", "#about"],
    ["#projects", "#contact"],
  ];

  const socialLinks = [
    {
      href: "https://github.com/Abdallah-Mushtaha",
      icon: "/Images/github.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/abdallah-mushtaha-138b42294/",
      icon: "/Images/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "mailto:Eng.Abood.Mushtaha@gmail.com",
      icon: "/Images/gmail.png",
      alt: "Email",
    },
    {
      href: "https://x.com/AboodMushtaha0",
      icon: "/Images/logos.png",
      alt: "Twitter/X",
    },
  ];

  return (
    <footer className="text-white py-12 px-6 bg-black/40 mt-20 -mb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* About */}
        <div className="flex items-center gap-8">
          <img
            src="/Images/Abood_Pro.png"
            className="w-80 h-35 object-cover object-center rounded-full mb-4 shadow-md border-2 p-2 border-yellow-500 border-dashed border-b-inherit border-e-inherit"
            alt="portfolio logo"
          />
          <div className="div">
            <h2 className="text-xl font-bold mb-4">
              <span className="text-yellow-500">A</span>bood{" "}
              <span className="text-yellow-500">M</span>ushtaha
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed w-65">
              Frontend developer passionate about creating elegant and
              performance focused user experiences. Let’s build something
              incredible together.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <div className="flex gap-5">
            {navGroups.map((group, index) => (
              <ul key={index} className="space-y-2 text-gray-400 text-sm">
                {group.map((href) => (
                  <FooterLink key={href} href={href}>
                    {href.replace("#", "").charAt(0).toUpperCase() +
                      href.replace("#", "").slice(1)}
                  </FooterLink>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            {socialLinks.map(({ href, icon, alt }) => (
              <SocialIcon key={href} href={href} iconClass={icon} alt={alt} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-white pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span>
          © {new Date().getFullYear()} Abood Mushtaha. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <span className="text-gray-500">||</span>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
