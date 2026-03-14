import React from "react";

function Footer() {
  const techStack = ["Java", "Spring Boot", "React", "MySQL"];
  const navLinks = ["About", "Experience", "Skills", "Projects", "Contact"];
  const socialLinks = [
    { label: "GH", href: "https://github.com/Krunaljumde24" },
    { label: "LI", href: "https://linkedin.com/in/krunal-jumde" },
    { label: "PF", href: "https://krunal-portfolio.hackerspace.co.in" },
  ];
  return (
    <footer className="bg-[#1a5f5f] text-[#f5f0e8] px-12 pt-12 pb-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-10">
        {/* Brand Column */}
        <div>
          <h2 className="font-mono text-[#f5a623] text-2xl font-bold mb-1">
            Krunal Jumde
          </h2>
          <p className="font-mono text-[#9ecfcf] text-xs tracking-widest mb-3">
            Full Stack Developer
          </p>
          <p className="text-[#c5e0e0] text-sm leading-relaxed max-w-[280px]">
            Building scalable web applications with clean, maintainable code.
            Open to exciting opportunities and collaborations.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-1 border border-[#2e8080] rounded text-[#9ecfcf]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Buttons */}
          <div className="flex gap-2 mt-5">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#2e8080] rounded-md text-[#9ecfcf] font-mono text-xs font-bold hover:border-[#f5a623] hover:text-[#f5a623] hover:bg-[#f5a62314] transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h3 className="font-mono text-[#f5a623] text-[11px] uppercase tracking-[0.1em] mb-4">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li>
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[#c5e0e0] text-sm hover:text-[#f5a623] transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-mono text-[#f5a623] text-[11px] uppercase tracking-[0.1em] mb-4">
            Get in Touch
          </h3>

          <a
            href="mailto:krunal@email.com"
            className="font-mono text-[#c5e0e0] text-xs hover:text-[#f5a623] transition-colors block mb-1"
          >
            krunaljumde24@gmail.com
          </a>
          <p className="text-[#9ecfcf] text-sm">Nagpur, Maharashtra, India</p>

          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-3 py-2 border border-[#f5a623] rounded-md bg-[#f5a62314]">
            <span className="w-2 h-2 rounded-full bg-[#4cd4a0] inline-block" />
            <span className="font-mono text-[#f5a623] text-xs">
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#2e8080] mb-5" />

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-[#7db8b8] text-xs">
          © 2026 <span className="text-[#f5a623]">Krunal Jumde</span>
        </p>
        <div className="flex gap-6">
          {["Privacy", "Source Code"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#7db8b8] text-xs hover:text-[#f5a623] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
