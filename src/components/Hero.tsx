"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // 3D Tilt Effect
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
      setTilt({ x: xAxis, y: yAxis });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row relative overflow-hidden px-margin-desktop gap-gutter">
      <div className="w-full md:w-1/2 flex flex-col justify-center py-20">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display-lg text-display-lg text-on-surface max-w-2xl"
          id="hero-title"
        >
          <motion.span variants={item} className="inline-block">Architecting</motion.span>{" "}
          <motion.span variants={item} className="inline-block">Legacies,</motion.span>
          <br />
          <motion.span variants={item} className="inline-block">Engineering</motion.span>{" "}
          <motion.span variants={item} className="inline-block">Dreams</motion.span>
        </motion.h1>
        
        <FadeIn delay={1.2}>
          <p className="mt-8 font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Bespoke residential masterpieces that redefine the horizon. We combine
            avant-garde architecture with precision engineering to create spaces
            that transcend time.
          </p>
        </FadeIn>
        
        <FadeIn delay={1.4}>
          <div className="mt-12 flex gap-6">
            <Link href="#projects" className="px-8 py-4 bg-primary text-surface font-label-caps tracking-widest hover:bg-primary-container transition-colors duration-300">
              EXPLORE PORTFOLIO
            </Link>
            <Link href="#about" className="px-8 py-4 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary/5 transition-colors duration-300">
              THE PHILOSOPHY
            </Link>
          </div>
        </FadeIn>
      </div>
      <div className="w-full md:w-1/2 relative flex items-center justify-center py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-none shadow-2xl ease-out"
          style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
        >
          <motion.img
            style={{ y }}
            alt="Hero Building"
            className="w-full h-[120%] -top-[10%] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 relative"
            src="/images/hero-building.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
