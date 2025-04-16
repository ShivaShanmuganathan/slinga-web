"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Base images - we'll duplicate these for the marquee
const baseImages = [
  { src: "/dashboard.png", alt: "Project 1", href: "/project-1" },
  { src: "/neo.jpeg", alt: "Project 2", href: "/project-2" },
  { src: "/cu.jpg", alt: "Project 3", href: "/project-3" },
];

const MarqueeRow = ({
  direction = "left",
  speed = 50,
}: {
  direction?: "left" | "right";
  speed?: number;
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const content = contentRef.current;
    if (!scroller || !content) return;

    let animationFrameId: number;
    let currentTranslation = 0;
    
    // Create a copy of the content for seamless looping
    const clone = content.cloneNode(true);
    scroller.appendChild(clone);

    const animate = () => {
      // Update translation
      if (direction === "left") {
        currentTranslation -= speed / 60;
      } else {
        currentTranslation += speed / 60;
      }

      // Get the width of a single set of items
      const contentWidth = content.offsetWidth;

      // Reset position when we've scrolled one full width
      if (direction === "left" && Math.abs(currentTranslation) >= contentWidth) {
        currentTranslation = 0;
      } else if (direction === "right" && currentTranslation >= contentWidth) {
        currentTranslation = 0;
      }

      // Apply the translation
      scroller.style.transform = `translateX(${currentTranslation}px)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [direction, speed]);

  // Create multiple sets of images for smoother looping
  const displayImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

  return (
    <div className="relative flex overflow-hidden group">
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
      
      {/* Scrolling container */}
      <div
        ref={scrollerRef}
        className="flex will-change-transform"
        style={{ width: "fit-content" }}
      >
        {/* Content that will be cloned */}
        <div
          ref={contentRef}
          className="flex gap-8 py-4"
          style={{ width: "fit-content" }}
        >
          {displayImages.map((image, idx) => (
            <Link
              key={`${image.href}-${idx}`}
              href={image.href}
              className="flex-none relative transition-transform duration-300 hover:scale-105 hover:brightness-110"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="rounded-xl shadow-lg object-cover w-[300px] h-[200px]"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
    </div>
  );
};

export default function ScrollingMarquee() {
  return (
    <section className="bg-neutral-900 py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950">
          <div className="p-8">
            <div className="space-y-8">
              <MarqueeRow direction="right" speed={40} />
              <MarqueeRow direction="left" speed={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 