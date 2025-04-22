"use client";

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  MotionValue,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Interface to define the types for our Dock context
interface DockContextType {
  width: number;
  hovered: boolean;
  setIsZooming: (value: boolean) => void;
  zoomLevel: MotionValue<number>;
  mouseX: MotionValue<number>;
  animatingIndexes: number[];
  setAnimatingIndexes: (indexes: number[]) => void;
}

// Props for the Dock component
interface DockProps {
  className?: string;
  children: ReactNode;
}

// Create a context to manage Dock state
const DockContext = createContext<DockContextType>({
  width: 0,
  hovered: false,
  setIsZooming: () => {},
  zoomLevel: null as any,
  mouseX: null as any,
  animatingIndexes: [],
  setAnimatingIndexes: () => {},
});

// Custom hook to use Dock context
export const useDock = () => useContext(DockContext);

// Custom hook for window resize
const useWindowResize = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener("resize", callback);
    callback(); // Initial call
    return () => window.removeEventListener("resize", callback);
  }, [callback]);
};

export function Dock({ className, children }: DockProps) {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const dockRef = useRef<HTMLDivElement>(null);
  const isZooming = useRef(false);
  const [animatingIndexes, setAnimatingIndexes] = useState<number[]>([]);

  const setIsZooming = useCallback((value: boolean) => {
    isZooming.current = value;
    setHovered(!value);
  }, []);

  const zoomLevel = useMotionValue(1);

  useWindowResize(() => {
    setWidth(dockRef.current?.clientWidth || 0);
  });

  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider
      value={{
        hovered,
        setIsZooming,
        width,
        zoomLevel,
        mouseX,
        animatingIndexes,
        setAnimatingIndexes,
      }}
    >
      <motion.div
        ref={dockRef}
        className={cn(
          "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-end h-14 p-2 gap-3 bg-opacity-90 rounded-xl",
          "dark:bg-neutral-900 bg-neutral-50 p-2 no-underline shadow-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/80",
          "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
          "shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px]",
          "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]",
          className
        )}
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
          if (!isZooming.current) {
            setHovered(true);
          }
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setHovered(false);
        }}
        style={{
          x: "-50%",
          scale: zoomLevel,
        }}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
} 