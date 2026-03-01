"use client";

import { Building2, Calendar, MapPin, TrendingUp, Zap, Shield, TestTube2, Container } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const achievements = [
  {
    icon: TrendingUp,
    text: "Designed high-throughput backend services for photo uploads serving millions of users",
    tag: "Scale",
  },
  {
    icon: Zap,
    text: "Built REST APIs for image analysis including location extraction and smart cropping",
    tag: "APIs",
  },
  {
    icon: Shield,
    text: "Optimized MySQL queries reducing latency from 5s to under 1s",
    tag: "Performance",
  },
  {
    icon: TestTube2,
    text: "Increased automated test coverage to 80%+",
    tag: "Quality",
  },
  {
    icon: Container,
    text: "Worked with Docker and Kafka for asynchronous processing",
    tag: "Infrastructure",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Experience
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 tracking-tight">
            Where I&apos;ve worked
          </h2>
          <p className="text-secondary text-[15px] max-w-lg mb-14">
            Building production systems that handle real-world scale and
            complexity.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/15 to-transparent hidden sm:block" />

            <div className="relative sm:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-[15px] top-2 hidden sm:flex">
                <span className="w-[18px] h-[18px] rounded-full border-[3px] border-accent bg-white shadow-[0_0_0_4px_rgba(91,127,94,0.1)]" />
              </div>

              {/* Company card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-7 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      Backend Engineer
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2.5">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-primary/80">
                        <Building2 size={14} className="text-accent" />
                        ValueLabs LLP
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-secondary">
                        <MapPin size={14} className="text-secondary/50" />
                        Hyderabad
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-accent bg-accent/8 rounded-full shrink-0">
                    <Calendar size={12} />
                    Jan 2023 - Present
                  </span>
                </div>

                <div className="space-y-4">
                  {achievements.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <AnimateOnScroll key={i} delay={150 + i * 60}>
                        <div className="group flex items-start gap-4 p-3.5 -mx-3.5 rounded-xl hover:bg-gray-50/80 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-lg bg-accent/6 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/10 transition-colors">
                            <Icon size={14} className="text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[14px] text-secondary leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/50 shrink-0 mt-1 hidden sm:block">
                            {item.tag}
                          </span>
                        </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
