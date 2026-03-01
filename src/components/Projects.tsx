"use client";

import { useState } from "react";
import { ExternalLink, Sparkles, ArrowUpRight, Globe, Bot, Layers } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const outfitBackendStack = [
  { name: "Java 17", color: "bg-red-50 text-red-700 border-red-100" },
  { name: "Spring Boot", color: "bg-green-50 text-green-700 border-green-100" },
  { name: "MySQL", color: "bg-orange-50 text-orange-700 border-orange-100" },
  { name: "Redis", color: "bg-rose-50 text-rose-700 border-rose-100" },
  { name: "Docker", color: "bg-sky-50 text-sky-700 border-sky-100" },
];

const outfitWebStack = [
  { name: "Next.js 14", color: "bg-gray-50 text-gray-700 border-gray-200" },
  { name: "TypeScript", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { name: "Gemini API", color: "bg-purple-50 text-purple-700 border-purple-100" },
  { name: "Vercel", color: "bg-gray-50 text-gray-700 border-gray-200" },
];

const outfitBackendFeatures = [
  "Redis caching with SHA-256 keyed responses, configurable TTL",
  "Sliding window rate limiter per user/IP via Redis INCR",
  "Async image processing with @Async thread pool",
  "Structured error responses with correlation IDs",
  "Actuator health checks + Prometheus metrics",
];

const outfitWebFeatures = [
  "Premium landing page with hero, features, and CTA",
  "Multi-step form with client-side validation",
  "Server-side Gemini API integration via Next.js API route",
  "Styled outfit cards with color palettes and tips",
  "One-click Vercel deployment, zero infrastructure",
];

const portfolioTechStack = [
  { name: "Next.js", color: "bg-gray-50 text-gray-700 border-gray-200" },
  { name: "TypeScript", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { name: "Vercel", color: "bg-gray-50 text-gray-700 border-gray-200" },
  { name: "AI-Assisted", color: "bg-purple-50 text-purple-700 border-purple-100" },
];

const portfolioFeatures = [
  "Used AI as a pair-programmer, not a template generator",
  "Next.js App Router with server-side rendering",
  "Responsive across mobile, tablet, and desktop",
  "Deployed to Vercel. Push to main and it's live.",
];

export default function Projects() {
  const [showDiagram, setShowDiagram] = useState<"none" | "c2" | "c3">("none");

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Projects
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-accent/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 tracking-tight">
            Featured work
          </h2>
          <p className="text-secondary text-[15px] max-w-lg mb-14">
            Things I built outside of work.
          </p>
        </AnimateOnScroll>

        <div className="space-y-8">
          {/* Project 1 - AI Outfit Backend (Spring Boot) */}
          <AnimateOnScroll delay={100}>
            <div className="group relative rounded-2xl border border-gray-100 overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="h-1 bg-gradient-to-r from-accent/60 via-accent/30 to-transparent" />

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center">
                        <Sparkles size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">
                          AI Outfit Recommendation Service
                        </h3>
                        <p className="text-xs text-secondary mt-0.5">
                          Spring Boot Backend &middot; Personal Project
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-secondary text-[14px] leading-[1.8]">
                        Production-grade REST API that takes body measurements,
                        style preferences, and occasion, then calls Gemini AI
                        to return personalized outfit recommendations. Built to
                        demonstrate backend systems thinking.
                      </p>
                      <p className="text-secondary text-[14px] leading-[1.8]">
                        Redis sits in front of Gemini to cache responses (SHA-256
                        keyed). A sliding window rate limiter protects the API
                        quota. Image uploads go to an async thread pool so the
                        API responds fast while processing happens in the background.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://github.com/jahnavibathini/outfit-recommender-java"
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        View on GitHub
                        <ArrowUpRight size={12} className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                      </a>
                      <button
                        onClick={() => setShowDiagram(showDiagram === "c2" ? "none" : "c2")}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                          showDiagram === "c2"
                            ? "bg-accent text-white"
                            : "text-primary border border-gray-200 hover:border-accent hover:text-accent"
                        }`}
                      >
                        <Layers size={14} />
                        C2 Diagram
                      </button>
                      <button
                        onClick={() => setShowDiagram(showDiagram === "c3" ? "none" : "c3")}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                          showDiagram === "c3"
                            ? "bg-accent text-white"
                            : "text-primary border border-gray-200 hover:border-accent hover:text-accent"
                        }`}
                      >
                        <Layers size={14} />
                        C3 Diagram
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary/60 font-semibold mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {outfitBackendFeatures.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-[13px] text-secondary leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary/60 font-semibold mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {outfitBackendStack.map((tech) => (
                          <span
                            key={tech.name}
                            className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg border ${tech.color}`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architecture Diagrams */}
                {showDiagram !== "none" && (
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-sm font-semibold text-primary">
                        {showDiagram === "c2"
                          ? "Container Diagram (C2)"
                          : "Component Diagram (C3)"}
                      </h4>
                      <button
                        onClick={() => setShowDiagram("none")}
                        className="text-xs text-secondary hover:text-primary transition-colors"
                      >
                        Close
                      </button>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-4 overflow-x-auto">
                      <img
                        src={
                          showDiagram === "c2"
                            ? "/diagrams/c2-container.svg"
                            : "/diagrams/c3-component.svg"
                        }
                        alt={
                          showDiagram === "c2"
                            ? "C2 Container Diagram"
                            : "C3 Component Diagram"
                        }
                        className="w-full max-w-none"
                      />
                    </div>
                    <p className="text-[11px] text-secondary/50 mt-3">
                      Generated with PlantUML using C4 model conventions.{" "}
                      <a
                        href={
                          showDiagram === "c2"
                            ? "https://github.com/jahnavi-bathini/ai-outfit-recommendation/blob/main/docs/c2-container.puml"
                            : "https://github.com/jahnavi-bathini/ai-outfit-recommendation/blob/main/docs/c3-component.puml"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent/50 hover:text-accent underline"
                      >
                        View source
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Project 2 - AI Outfit Web App (Next.js) */}
          <AnimateOnScroll delay={200}>
            <div className="group relative rounded-2xl border border-gray-100 overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="h-1 bg-gradient-to-r from-purple-500/50 via-purple-400/20 to-transparent" />

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/8 flex items-center justify-center">
                        <Sparkles size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">
                          AI Outfit Recommendation Web App
                        </h3>
                        <p className="text-xs text-secondary mt-0.5">
                          Next.js Frontend &middot; Personal Project
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-secondary text-[14px] leading-[1.8]">
                        Same product concept as the Spring Boot version, but
                        built as a premium web app using AI pair-programming.
                        Landing page, recommendation form, and styled results
                        page. Gemini integration happens server-side via a
                        Next.js API route.
                      </p>
                      <p className="text-secondary text-[14px] leading-[1.8]">
                        No database, no Redis, no Docker. Just a clean frontend
                        optimized for Vercel deployment. Shows product polish
                        and the ability to leverage AI tools to ship fast.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://github.com/jahnavibathini/outfit-recommender-web"
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        View on GitHub
                        <ArrowUpRight size={12} className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary/60 font-semibold mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {outfitWebFeatures.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-[13px] text-secondary leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-purple-500 mt-2 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary/60 font-semibold mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {outfitWebStack.map((tech) => (
                          <span
                            key={tech.name}
                            className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg border ${tech.color}`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Project 3 - Portfolio Website */}
          <AnimateOnScroll delay={300}>
            <div className="group relative rounded-2xl border border-gray-100 overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="h-1 bg-gradient-to-r from-purple-500/50 via-purple-400/20 to-transparent" />

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid lg:grid-cols-5 gap-10">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/8 flex items-center justify-center">
                        <Bot size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">
                          Portfolio Website
                        </h3>
                        <p className="text-xs text-secondary mt-0.5">
                          Full-Stack Web App &middot; Personal Project
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-secondary text-[14px] leading-[1.8]">
                        This site. Built it with AI pair-programming. I
                        described what I wanted, reviewed every component,
                        and iterated until it looked right. No templates,
                        no drag-and-drop builders.
                      </p>
                      <p className="text-secondary text-[14px] leading-[1.8]">
                        Next.js with TypeScript handles the rendering.
                        Tailwind CSS handles the styling. Push to main
                        and Vercel deploys it automatically. The whole
                        thing went from zero to live in one sitting.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#"
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        Source Code
                        <ArrowUpRight size={12} className="opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary/60 font-semibold mb-4">
                        Highlights
                      </h4>
                      <ul className="space-y-3">
                        {portfolioFeatures.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-[13px] text-secondary leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-purple-500 mt-2 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary/60 font-semibold mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {portfolioTechStack.map((tech) => (
                          <span
                            key={tech.name}
                            className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg border ${tech.color}`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100/50">
                      <p className="text-[12px] text-purple-700/70 leading-relaxed">
                        <span className="font-semibold text-purple-700">Why AI?</span>{" "}
                        I&apos;m a backend engineer, not a frontend designer.
                        AI let me ship a polished UI without spending weeks
                        learning React patterns from scratch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
