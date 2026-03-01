"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-60" />
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/8 to-accent/3 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-accent/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] blur-3xl pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-32 right-12 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-32 left-12 w-px h-24 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Greeting tag */}
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-xs font-medium tracking-wide mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <div
            className={`transition-all duration-700 delay-100 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-primary leading-[1.08] tracking-tight">
              Jahnavi
              <br />
              <span className="relative">
                Bathini
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C32 2 68 1 100 3.5C132 6 168 5.5 199 2.5"
                    stroke="#5B7F5E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-30"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Title + pitch */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mt-8 text-xl sm:text-2xl text-secondary font-light leading-relaxed max-w-xl text-balance">
              <span className="text-primary font-medium">Backend Engineer</span>{" "}
              building scalable Java &amp; Spring Boot systems that perform at
              scale.
            </p>
          </div>

          {/* Stats row */}
          <div
            className={`transition-all duration-700 delay-300 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-8 mt-10 text-sm">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">3+</span>
                <span className="text-secondary text-xs mt-0.5">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">10+</span>
                <span className="text-secondary text-xs mt-0.5">Microservices Built</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">80%+</span>
                <span className="text-secondary text-xs mt-0.5">Test Coverage</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`transition-all duration-700 delay-[400ms] ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex gap-4 mt-12 flex-wrap">
              <a
                href="https://www.linkedin.com/in/jahnavi-bathini"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-0.5"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-gray-200 text-primary text-sm font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent/[0.04] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/50 font-medium">
          Scroll
        </span>
        <a href="#about" aria-label="Scroll down" className="relative">
          <span className="block w-5 h-8 rounded-full border-2 border-secondary/20 relative">
            <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1.5 rounded-full bg-accent animate-bounce" />
          </span>
        </a>
      </div>
    </section>
  );
}
