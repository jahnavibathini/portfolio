import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jahnavi Bathini | Backend Engineer",
  description:
    "Backend Engineer specializing in scalable Java & Spring Boot systems. 3 years of experience building microservices, media processing pipelines, and event-driven architectures.",
  keywords: [
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "Jahnavi Bathini",
  ],
  openGraph: {
    title: "Jahnavi Bathini | Backend Engineer",
    description:
      "Building scalable Java & Spring Boot systems that perform at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
