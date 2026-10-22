
'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 w-full bg-transparent px-6 py-4 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">

        {/* Profile */}
        <Link href="#home" className="flex shrink-0 items-center gap-3">
          <Image
            className="rounded-full border border-white/10 object-cover"
            src="/assets/photo.jpg"
            alt="Abdullah Al Fuad"
            width={42}
            height={42}
            priority
          />
          <span className="hidden text-sm font-semibold text-slate-200 sm:block">
            Abdullah Al Fuad
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          <Link className="text-violet-400 transition-colors hover:text-white" href="#home">
            Home
          </Link>
          <Link className="transition-colors hover:text-violet-400" href="#about">
            About
          </Link>
          <Link className="transition-colors hover:text-violet-400" href="#projects">
            Projects
          </Link>
          <Link className="transition-colors hover:text-violet-400" href="#skills">
            Skills
          </Link>
          <Link className="transition-colors hover:text-violet-400" href="#experience">
            Experience
          </Link>
          <Link className="transition-colors hover:text-violet-400" href="#contact">
            Contact
          </Link>
        </div>

        {/* Download CV */}
        <a
          href="/assets/cv.pdf"
          download
          className="shrink-0 rounded-full border border-blue-500/70 px-4 py-2 text-xs font-medium text-slate-100 transition-all hover:border-violet-400 hover:bg-violet-500/10"
        >
          Download CV
        </a>

      </div>
    </nav>
  );
}
