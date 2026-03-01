"use client";

import { Linkedin, ArrowUpRight, MapPin, MessageSquare } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="text-secondary text-[15px] max-w-lg mb-14">
            Open to discussing backend engineering roles at product companies.
            The best way to reach me is through LinkedIn.
          </p>
        </AnimateOnScroll>

        <div className="max-w-2xl">
          <AnimateOnScroll delay={100}>
            <div className="space-y-5">
              {/* LinkedIn card — primary */}
              <a
                href="https://www.linkedin.com/in/jahnavi-bathini"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-accent/20 bg-accent/[0.03] hover:bg-accent/[0.06] hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 group-hover:scale-105 transition-all duration-300">
                  <Linkedin size={22} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-accent/60 font-semibold">
                    Preferred contact
                  </p>
                  <p className="text-base font-semibold text-primary group-hover:text-accent transition-colors mt-0.5">
                    Connect on LinkedIn
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    linkedin.com/in/jahnavi-bathini
                  </p>
                </div>
                <ArrowUpRight size={18} className="text-accent/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              {/* Message via LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jahnavi-bathini"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-100 hover:border-accent/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/8 flex items-center justify-center shrink-0 group-hover:bg-accent/12 transition-colors duration-300">
                  <MessageSquare size={20} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-secondary/60 font-medium">
                    Send a message
                  </p>
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors mt-0.5">
                    Message me on LinkedIn
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    Happy to discuss opportunities and collaborations
                  </p>
                </div>
                <ArrowUpRight size={14} className="text-secondary/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>

              {/* Location card */}
              <div className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-accent/8 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-secondary/60 font-medium">
                    Open to opportunities
                  </p>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    Remote, Bangalore &amp; Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
