"use client";

import { AuroraText } from "@/components/aurora-text";
import { Section } from "@/components/section";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MobileAnimation } from "@/components/ui/mobile-animation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ShieldCheck, Calendar } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

const ease = [0.16, 1, 0.3, 1];

function SecurityPill() {
  return (
    <motion.div
      className="flex w-fit items-center space-x-2 rounded-full bg-primary/10 px-3 py-1.5 ring-1 ring-primary/25"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <ShieldCheck className="h-4 w-4" />
        Security First Approach
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [showSpline, setShowSpline] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowSpline(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <Section id="hero" className="overflow-hidden">
      <div
        className="relative h-screen w-full bg-orange-50 dark:bg-black group"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <DotPattern
          className="[mask-image:radial-gradient(circle_at_center,black,transparent)] fill-neutral-400"
          width={16}
          height={16}
          cx={1}
          cy={1}
          cr={1}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                250px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                250px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
          }}
        >
          <DotPattern
            width={16}
            height={16}
            cx={1}
            cy={1}
            cr={1}
            className="fill-orange-500 dark:fill-orange-500"
          />
        </motion.div>

        <div className="container relative grid h-screen grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start space-y-8">
            <SecurityPill />

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
                <AuroraText>{siteConfig.hero.title}</AuroraText>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                {siteConfig.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
            >
              <Button size="lg" className="group relative overflow-hidden">
                <Calendar className="mr-2 h-4 w-4" />
                Book A Call
                <span className="absolute inset-x-0 -bottom-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0.5" />
              </Button>
            </motion.div>
          </div>

          <div className="relative h-full">
            {isMobile ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease }}
                className="flex h-full items-center justify-center"
              >
                <MobileAnimation />
              </motion.div>
            ) : (
              <Suspense>
                {showSpline && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease }}
                    className="absolute inset-0 scale-150 translate-x-24"
                  >
                    <LazySpline
                      scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode"
                      className="h-full w-full [&>div>div:last-child]:hidden"
                    />
                  </motion.div>
                )}
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
