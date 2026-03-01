"use client";

import { Code2, Server, Database, Cloud } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const skillGroups = [
  {
    title: "Languages",
    description: "Core programming languages",
    icon: Code2,
    skills: ["Java", "Python", "SQL"],
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "Backend & Frameworks",
    description: "Server-side technologies",
    icon: Server,
    skills: ["Spring Boot", "REST APIs", "Microservices", "Spring Data JPA"],
    color: "from-accent/10 to-accent/5",
  },
  {
    title: "Data & Messaging",
    description: "Storage and event systems",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Apache Kafka", "Redis"],
    color: "from-amber-500/10 to-amber-500/5",
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure and delivery",
    icon: Cloud,
    skills: ["AWS S3", "Docker", "Jenkins", "CI/CD"],
    color: "from-purple-500/10 to-purple-500/5",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Skills
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 tracking-tight">
            Technical expertise
          </h2>
          <p className="text-secondary text-[15px] max-w-lg mb-14">
            Focused on building robust backend systems with modern Java
            ecosystem tools and cloud-native practices.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <AnimateOnScroll key={group.title} delay={i * 80}>
                <div className="group relative p-6 rounded-2xl border border-gray-100 hover:border-accent/25 transition-all duration-500 h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      <Icon size={20} className="text-accent" />
                    </div>

                    <h3 className="text-sm font-bold text-primary mb-1">
                      {group.title}
                    </h3>
                    <p className="text-[11px] text-secondary/60 mb-5">
                      {group.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[11px] font-medium text-secondary bg-gray-50 group-hover:bg-white/80 rounded-md transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
