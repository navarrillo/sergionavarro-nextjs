"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Eye } from "lucide-react";
import Link from "next/link";
import { EmailForm } from "@/components/email-form";

export default function Portfolio() {
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden font-sans flex items-center justify-center`}
      style={{ fontFamily: "var(--font-halenoir)" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-blue-700"
        style={{
          backgroundImage: `
            radial-gradient(circle at top center, rgba(59, 130, 246, 1) 0%, rgba(37, 99, 235, 0.8) 25%, rgba(30, 64, 175, 0.6) 50%, rgba(30, 58, 138, 0.4) 75%, transparent 100%),
            linear-gradient(to bottom, #1e40af, #1e3a8a)
          `,
          backgroundSize: "100% 100%, 100% 100%",
          backgroundPosition: "center top, center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-left px-4 flex flex-col justify-center h-screen">
        <h1 className=" font-bold  text-left w-full ">
          <span
            className="text-transparent bg-clip-text text-7xl "
            style={{
              backgroundImage: "linear-gradient(to right, silver, white)",
              backgroundPosition: "center bottom",
            }}
          >
            Software Engineer
          </span>
          <span className="text-lg font-semibold text-blue-200 mt-2 block md:inline">
            Empowered by AI
          </span>
        </h1>
        <p className="text-xl mt-5 mb-8 leading-relaxed text-white w-full font-halenoir">
          I&apos;m Sergio Navarro, 30, and passionate about artificial
          inteligence. To me, developing software and engineering is a way of
          art and magic, transforming neural conections into tangible things.
          I&apos;m on a journey to make a name for myself, actively exploring
          freelance and new ways to enjoy life.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800"
            onClick={() => setIsEmailFormOpen(true)}
          >
            <Mail className="mr-2 h-4 w-4" /> Email Me
          </Button>
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100"
          >
            <Eye className="mr-2 h-4 w-4" /> Portfolio
          </Button>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <Link
            href="https://x.com/SergioNavarroAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/navarrillo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sergio-navarro-moratalla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200"
            aria-label="RSS Feed"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 0 1 3.293 3.295A3.303 3.303 0 0 1 3.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
            </svg>
          </Link>
        </div>
      </div>
      <EmailForm
        isOpen={isEmailFormOpen}
        onClose={() => setIsEmailFormOpen(false)}
      />
    </div>
  );
}
