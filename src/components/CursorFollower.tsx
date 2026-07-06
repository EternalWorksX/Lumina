"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const handleMouseMove = (e: MouseEvent) => {
      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    };

    const handleMouseEnter = () => {
      follower.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const handleMouseLeave = () => {
      follower.style.transform = "translate(-50%, -50%) scale(0)";
    };

    document.addEventListener("mousemove", handleMouseMove);

    // MutationObserver to attach events to dynamically added bento cards
    const observer = new MutationObserver(() => {
      const cards = document.querySelectorAll(".bento-card");
      cards.forEach((card) => {
        // Remove existing listener to avoid duplicates
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
        
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial attachment
    const cards = document.querySelectorAll(".bento-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      const cards = document.querySelectorAll(".bento-card");
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="custom-cursor-follower font-label-caps"
      id="custom-follower"
      ref={followerRef}
    >
      <div>
        VIEW<br />PROJECT
      </div>
    </div>
  );
}
