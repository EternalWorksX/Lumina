"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 h-16 bg-background/80 backdrop-blur-xl border-b border-white/10"
          : "h-20 bg-surface/10 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="flex justify-between items-center h-full px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="font-display-sm text-display-sm tracking-tighter text-on-surface hover-split-text cursor-pointer">
          <span>L</span>
          <span>U</span>
          <span>M</span>
          <span>I</span>
          <span>N</span>
          <span>A</span>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <Link
            href="#projects"
            className="font-body-lg font-semibold tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="font-body-lg font-semibold tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="font-body-lg font-semibold tracking-wide text-on-surface-variant hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-3 font-label-caps text-label-caps active:scale-95 transition-transform duration-150 rounded-none">
          Schedule a Tour
        </button>
      </div>
    </nav>
  );
}
