"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export function DotPatternDemo() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background"
      onMouseMove={handleMouseMove}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "text-neutral-400/80"
        )}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "text-primary/10"
          )}
        />
      </motion.div>
    </div>
  );
}
