import { Linkedin, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top row */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#" className="text-xl font-bold text-primary tracking-tight">
              JB
            </a>
            <p className="text-sm text-secondary mt-2 max-w-xs">
              Backend Engineer building scalable systems with Java &amp; Spring Boot.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100" />

        {/* Bottom row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary/60">
            &copy; {new Date().getFullYear()} Jahnavi Bathini. Built with Next.js.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jahnavi-bathini"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary/50 hover:text-accent hover:bg-accent/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <div className="w-px h-4 bg-gray-200 mx-1" />
            <a
              href="#"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary/50 hover:text-accent hover:bg-accent/5 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
