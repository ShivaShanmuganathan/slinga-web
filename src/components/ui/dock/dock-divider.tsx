"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DockDividerProps {
  className?: string;
}

export function DockDivider({ className }: DockDividerProps) {
  return (
    <div
      className={cn(
        "w-[1px] h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full mx-1",
        className
      )}
    />
  );
} 