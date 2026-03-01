"use client";

import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  {
    icon: Briefcase,
    label: "Current Role",
    value: "Backend Engineer at ValueLabs",
  },
  {
    icon: MapPin,
    label: "Open to",
    value: "Remote, Bangalore & Hyderabad",
  },
  {
    icon: GraduationCap,
    label: "Focus",
    value: "Microservices & System Design",
  },
  {
    icon: Heart,
    label: "Passionate About",
    value: "Performance at Scale",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
            Crafting reliable systems,<br className="hidden sm:block" />
            one service at a time.
          </h2>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-16 mt-12">
          <AnimateOnScroll delay={100} className="lg:col-span-3">
            <div className="space-y-5">
              <p className="text-secondary text-[15px] leading-[1.85]">
                I&apos;m a Backend Engineer with 3 years of experience building
                scalable microservices and media processing systems using Java
                and Spring Boot.
              </p>
              <p className="text-secondary text-[15px] leading-[1.85]">
                I&apos;ve worked on high-throughput image pipelines processing
                millions of uploads, optimized database queries for 5x latency
                improvements, and built event-driven architectures using Kafka
                for asynchronous processing.
              </p>
              <p className="text-secondary text-[15px] leading-[1.85]">
                I care deeply about writing clean, well-tested code and
                designing systems that are maintainable, observable, and built to
                handle real-world scale.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center shrink-0 group-hover:bg-accent/12 transition-colors duration-300">
                      <Icon size={17} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-secondary/70 font-medium">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-primary mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
