'use client';

import React from "react";
import { motion } from "framer-motion";
import FlickeringGrid from "./flickering-grid";
import { cn } from "@/lib/utils";

interface AnimatedFlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
  text?: string;
  fontSize?: number;
  fontWeight?: number;
}

export const AnimatedFlickeringGrid: React.FC<AnimatedFlickeringGridProps> = ({
  className,
  squareSize,
  gridGap,
  flickerChance,
  color,
  maxOpacity,
  text,
  fontSize,
  fontWeight,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("relative h-full w-full", className)}
    >
      <FlickeringGrid
        squareSize={squareSize}
        gridGap={gridGap}
        flickerChance={flickerChance}
        color={color}
        maxOpacity={maxOpacity}
        text={text}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </motion.div>
  );
};

export default FlickeringGrid; 