"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-[4.25rem] flex items-center justify-between">
        <a
          href="#"
          className="relative text-lg font-bold text-primary tracking-tight group"
        >
          <span className="relative z-10">JB</span>
          <span className="absolute -inset-2 rounded-lg bg-accent/0 group-hover:bg-accent/8 transition-colors duration-300" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
          <li className="ml-4">
            <a
              href="https://www.linkedin.com/in/jahnavi-bathini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-[13px] font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent bg-accent/5 font-medium"
                      : "text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://www.linkedin.com/in/jahnavi-bathini"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2.5 text-sm font-medium text-white bg-primary rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
