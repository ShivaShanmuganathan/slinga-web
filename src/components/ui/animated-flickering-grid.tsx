'use client';

import { motion } from 'framer-motion';
import FlickeringGrid from './flickering-grid';

interface AnimatedFlickeringGridProps {
  className?: string;
}

export default function AnimatedFlickeringGrid({ className }: AnimatedFlickeringGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      <FlickeringGrid
        className="size-full"
        gridGap={4}
        squareSize={2}
        maxOpacity={0.5}
      />
    </motion.div>
  );
} 