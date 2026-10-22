
import Link from "next/link";

export default function Header() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#050914] text-slate-100"
    >
      {/* Right-side hero artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-[-1] w-full md:w-[72%]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              #050914 0%,
              rgba(5, 9, 20, 0.92) 10%,
              rgba(5, 9, 20, 0.35) 42%,
              rgba(5, 9, 20, 0.05) 75%
            ),
            linear-gradient(
              to bottom,
              rgba(5, 9, 20, 0.12) 0%,
              transparent 45%,
              #050914 100%
            ),
            url('/assets/header-bg.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-28 md:px-12 lg:px-16">

        <div className="w-full max-w-xl">

          <p className="mb-3 text-sm font-medium tracking-wide text-violet-400">
            Hi, I'm
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Abdullah{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AL Fuad
            </span>
          </h1>

          <h2 className="mt-5 text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
            Full Stack Developer &amp; AI Automation Enthusiast
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
            I build modern web applications and AI-powered solutions
            that help businesses work smarter. Passionate about MERN
            Stack, PostgreSQL, Docker, n8n, RAG, and creating
            real-world impact through technology.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
            >
              View My Projects
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border border-violet-400/60 px-6 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-violet-500/10 hover:border-violet-400"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social links can be added here */}

        </div>
      </div>
    </section>
  );
}
