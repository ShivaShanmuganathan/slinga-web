"use client";

import { Section } from "@/components/section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type TechnologyName = 
  | "Solidity"
  | "Python"
  | "TypeScript"
  | "Rust"
  | "TailwindCSS"
  | "Foundry"
  | "Brownie"
  | "Hardhat"
  | "NextJS"
  | "EtherJS";

const technologies: TechnologyName[] = [
  "Solidity",
  "Python",
  "TypeScript",
  "Rust",
  "TailwindCSS",
];

const technologies2: TechnologyName[] = [
  "Foundry",
  "Brownie",
  "Hardhat",
  "NextJS",
  "EtherJS",
];

const Logos = () => {
  const [currentSet, setCurrentSet] = useState<TechnologyName[]>(technologies);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev === technologies ? technologies2 : technologies));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="logos">
      <div className="border-x border-t">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {technologies.map((_, idx) => (
            <div
              key={idx}
              className="flex group items-center justify-center p-4 border-r border-t last:border-r-0 sm:last:border-r md:[&:nth-child(3n)]:border-r md:[&:nth-child(5n)]:border-r-0 md:[&:nth-child(3)]:border-r [&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(-n+3)]:border-t-0 sm:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(-n+5)]:border-t-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSet[idx]}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: Math.random() * 0.5,
                  }}
                  className="relative group"
                >
                  <span className="text-lg font-mono font-semibold tracking-tight bg-gradient-to-r from-gray-800/70 to-gray-900/70 bg-clip-text text-transparent transition-all duration-200 ease-out opacity-70 group-hover:opacity-100 dark:from-gray-100/70 dark:to-white/70">
                    {currentSet[idx]}
                  </span>
                  <span className="absolute -bottom-px left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-800/50 to-transparent scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100 dark:via-gray-100/50"></span>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Logos;
