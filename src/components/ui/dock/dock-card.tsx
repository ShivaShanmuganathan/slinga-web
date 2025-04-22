"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useDock } from "./dock";
import { cn } from "@/lib/utils";

interface DockCardProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const INITIAL_WIDTH = 48;

export function DockCard({ children, id, className }: DockCardProps) {
  const { mouseX, hovered, width } = useDock();
  const ref = useRef<HTMLDivElement>(null);

  const rect = useRef<DOMRect>();
  const x = useRef(0);

  const getRect = () => {
    if (!rect.current && ref.current) {
      rect.current = ref.current.getBoundingClientRect();
    }
    return rect.current;
  };

  const distanceFromMouseToCenter = useTransform(mouseX, (val) => {
    const rect = getRect();
    if (!rect) return 0;
    return val - (rect.left + rect.width / 2);
  });

  const widthPx = useTransform(distanceFromMouseToCenter, (distance) => {
    if (!hovered) return INITIAL_WIDTH;
    const elasticWidth = INITIAL_WIDTH + (400 / (1 + 0.005 * Math.abs(distance)));
    return elasticWidth;
  });

  const width2 = useSpring(widthPx, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: width2 }}
      className={cn("aspect-square relative shrink-0", className)}
    >
      {children}
    </motion.div>
  );
} 